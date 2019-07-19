import { isDevMode } from '@angular/core';
import { Subscription, combineLatest } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import getReduxDevToolsPlugin from './plugins/redux_devtools';
import { ActionState } from './action-state';
/**
 * @internal
 */
var RootStore = /** @class */ (function () {
    function RootStore() {
        /**
         * 数据流 数据是一个Map，k,v键值对，关键字->状态数据
         */
        this._containers = new BehaviorSubject(new Map());
        this._plugin = getReduxDevToolsPlugin();
        this._combinedStateSubscription = new Subscription();
        if (this._plugin.isConnectSuccessed()) {
            this._assignCombinedState(); // 最终调用handleNewState
            console.log("\u662F\u5426\u5728Angular\u5F00\u53D1\u73AF\u5883\uFF1A" + isDevMode() + ", \u521D\u59CB\u5316root-store");
        }
    }
    RootStore.getSingletonRootStore = function () {
        if (!this._rootStore) {
            this._rootStore = new RootStore();
        }
        return this._rootStore;
    };
    RootStore.prototype._assignCombinedState = function () {
        var _this = this;
        this._combinedStateSubscription = this._containers
            .pipe(switchMap(function (containers) { return _this._getCombinedState(containers); }))
            .pipe(map(function (states) {
            var actionName = ActionState.getActionName();
            var state = states.reduce(function (acc, curr) {
                acc[curr.containerName] = curr.state;
                return acc;
            }, {});
            return { state: state, actionName: actionName };
        }))
            .subscribe(function (c) {
            _this._plugin.handleNewState(c.actionName, c.state);
        });
    };
    /**
     * 合并数据流
     * 合并状态数据，把状态数据转换为这样的数据：{ containerName: string, state: any }，并且
     * 通过combineLatest合并成一个数据数据流，这样状态数据只有涉及更新，那么这边就会得到通知
     * @param containers 状态数据的Map
     */
    RootStore.prototype._getCombinedState = function (containers) {
        return combineLatest.apply(void 0, Array.from(containers.entries()).map(function (_a) {
            var containerName = _a[0], container = _a[1];
            return container.state$.pipe(map(function (state) { return ({ containerName: containerName, state: state }); }), tap(function (data) {
            }));
        }));
    };
    /**
     * @internal
     */
    RootStore.prototype.ngOnDestroy = function () {
        this._combinedStateSubscription.unsubscribe();
    };
    /**
     * @internal
     */
    RootStore.prototype.registerStore = function (store) {
        var containers = new Map(this._containers.value);
        if (containers.has(store.getStoreInstanceId())) {
            throw new Error("Store: Store with duplicate instance ID found! " + store.getStoreInstanceId() +
                " is already registered. Please check your getStoreInstanceId() methods!");
        }
        containers.set(store.getStoreInstanceId(), store);
        this._containers.next(containers);
    };
    RootStore.prototype.existStoreInstanceId = function (instanceId) {
        var containers = new Map(this._containers.value);
        if (containers.has(instanceId)) {
            return true;
        }
        return false;
    };
    /**
     * @internal
     */
    RootStore.prototype.unregisterStore = function (store) {
        var containers = new Map(this._containers.value);
        containers.delete(store.getStoreInstanceId());
        this._containers.next(containers);
    };
    return RootStore;
}());
export { RootStore };
//# sourceMappingURL=root-store.js.map