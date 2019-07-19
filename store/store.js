var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Observable, BehaviorSubject, from } from 'rxjs';
import { distinctUntilChanged, map, shareReplay } from 'rxjs/operators';
import { META_KEY } from './types';
import { helpers } from '../util';
import { RootStore } from './root-store';
import { isDevMode } from '@angular/core';
import { ActionState } from './action-state';
var Store = /** @class */ (function () {
    function Store(initialState) {
        this.apply_redux_tool = isDevMode();
        this._defaultStoreInstanceId = "" + this._getClassName();
        this.state$ = new BehaviorSubject(initialState);
        if (this.apply_redux_tool) {
            var _rootStore = RootStore.getSingletonRootStore();
            ActionState.changeAction("Add-" + this._defaultStoreInstanceId);
            _rootStore.registerStore(this);
        }
    }
    Object.defineProperty(Store.prototype, "snapshot", {
        get: function () {
            return this.state$.getValue();
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.dispatch = function (type, payload) {
        ActionState.changeAction(this._defaultStoreInstanceId + "-" + type);
        var result = this._dispatch({
            type: type,
            payload: payload
        });
        result.subscribe();
        return result;
    };
    Store.prototype._dispatch = function (action) {
        var meta = this[META_KEY];
        if (!meta) {
            throw new Error(META_KEY + " is not found, current store has not action");
        }
        var actionMeta = meta.actions[action.type];
        if (!actionMeta) {
            throw new Error(action.type + " is not found");
        }
        // let result: any = this[actionMeta.fn](this.snapshot, action.payload);
        var result = actionMeta.originalFn.call(this, this.snapshot, action.payload);
        if (result instanceof Promise) {
            result = from(result);
        }
        if (result instanceof Observable) {
            result = result.pipe(map(function (r) { return r; }));
        }
        else {
            result = Observable.create(function (observer) {
                observer.next({});
            });
            // result = of({});
        }
        return result.pipe(shareReplay());
    };
    Store.prototype.select = function (selector) {
        return this.state$.pipe(map(selector), distinctUntilChanged());
    };
    Store.prototype.next = function (state) {
        this.state$.next(state);
    };
    Store.prototype.error = function (error) {
        this.state$.error(error);
    };
    Store.prototype.complete = function () {
        this.state$.complete();
    };
    Store.prototype.subscribe = function (next, error, complete) {
        return this.state$.subscribe(next, error, complete);
    };
    /**
     * set store new state
     *
     * @example
     * this.setState(newState);
     * this.setState({ users: produce(this.snapshot.users).add(user) });
     * this.setState((state) => {
     *    return {
     *        users: produce(state.users).add(user)
     *    }
     * });
     * @param fn
     */
    Store.prototype.setState = function (fn) {
        if (helpers.isFunction(fn)) {
            this.next(__assign({}, this.snapshot, fn(this.snapshot)));
        }
        else {
            this.next(__assign({}, this.snapshot, fn));
        }
    };
    Store.prototype.getState = function () {
        return this.snapshot;
    };
    Store.prototype.ngOnDestroy = function () {
        if (this.apply_redux_tool) {
            var _rootStore = RootStore.getSingletonRootStore();
            _rootStore.unregisterStore(this);
        }
    };
    /**
     * You can override this method if you want to give your container instance a custom id.
     * The returned id must be unique in the application.
     */
    Store.prototype.getStoreInstanceId = function () {
        return this._defaultStoreInstanceId;
    };
    Store.prototype._getClassName = function () {
        var name = this.constructor.name;
        if (this.apply_redux_tool) {
            var _rootStore = RootStore.getSingletonRootStore();
            if (!_rootStore.existStoreInstanceId(name)) {
                return name;
            }
            var j = 0;
            for (var i = 1; i < 20; i++) {
                if (!_rootStore.existStoreInstanceId(name + "-" + i)) {
                    j = i;
                    break;
                }
            }
            return this.constructor.name + "-" + j;
        }
        return name;
    };
    return Store;
}());
export { Store };
//# sourceMappingURL=store.js.map