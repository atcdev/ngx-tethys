var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Store } from './store';
import { helpers } from '../util';
var EntityStore = /** @class */ (function (_super) {
    __extends(EntityStore, _super);
    function EntityStore(initialState, options) {
        if (initialState === void 0) { initialState = {
            pageIndex: 1,
            entities: []
        }; }
        if (options === void 0) { options = { idKey: '_id' }; }
        var _this = _super.call(this, initialState) || this;
        _this.options = options;
        return _this;
    }
    EntityStore.prototype.resetPagination = function (pagination, count) {
        pagination.count = count;
        // 向上取整 21 / 20 = 1.05 = 2 pageCount is 2
        var pageCount = Math.ceil(pagination.count / pagination.pageSize);
        pagination.pageCount = pageCount;
    };
    EntityStore.prototype.increasePagination = function (amount) {
        var pagination = this.snapshot.pagination;
        this.resetPagination(pagination, pagination.count + amount);
    };
    EntityStore.prototype.decreasePagination = function (amount) {
        var pagination = this.snapshot.pagination;
        if (pagination) {
            this.resetPagination(pagination, pagination.count - amount);
        }
    };
    Object.defineProperty(EntityStore.prototype, "entities", {
        get: function () {
            return this.snapshot.entities;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EntityStore.prototype, "entities$", {
        get: function () {
            return this.select(function (state) {
                return state.entities;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     *
     * Replace current collection with provided collection
     *
     * @example
     * this.store.initialize([Entity, Entity]);
     *
     */
    EntityStore.prototype.initialize = function (entities, pagination) {
        var state = this.snapshot;
        state.entities = entities || [];
        state.pagination = pagination;
        this.next(state);
    };
    /**
     * Add an entity or entities to the store.
     *
     * @example
     * this.store.add(Entity);
     * this.store.add([Entity, Entity]);
     * this.store.add(Entity, { prepend: true });
     */
    EntityStore.prototype.add = function (entity, addOptions) {
        var addEntities = helpers.coerceArray(entity);
        if (addEntities.length === 0) {
            return;
        }
        var state = this.snapshot;
        if (addOptions && addOptions.prepend) {
            state.entities = addEntities.concat(state.entities);
        }
        else {
            state.entities = state.entities.concat(addEntities);
        }
        if (state.pagination) {
            this.increasePagination(addEntities.length);
            if (addOptions &&
                !addOptions.prepend &&
                addOptions.autoGotoLastPage) {
                state.pageIndex = state.pagination.pageIndex =
                    state.pagination.pageCount;
            }
        }
        this.next(state);
    };
    EntityStore.prototype.update = function (idsOrFn, newStateOrFn) {
        var ids = helpers.coerceArray(idsOrFn);
        var state = this.snapshot;
        for (var i = 0; i < state.entities.length; i++) {
            var oldEntity = state.entities[i];
            if (ids.indexOf(oldEntity[this.options.idKey]) > -1) {
                var newState = helpers.isFunction(newStateOrFn)
                    ? newStateOrFn(oldEntity)
                    : newStateOrFn;
                state.entities[i] = __assign({}, oldEntity, newState);
            }
        }
    };
    EntityStore.prototype.remove = function (idsOrFn) {
        var _this = this;
        var state = this.snapshot;
        var originalLength = state.entities.length;
        if (helpers.isFunction(idsOrFn)) {
            state.entities = state.entities.filter(function (entity) {
                return !idsOrFn(entity);
            });
        }
        else {
            var ids_1 = helpers.coerceArray(idsOrFn);
            state.entities = state.entities.filter(function (entity) {
                return ids_1.indexOf(entity[_this.options.idKey]) === -1;
            });
        }
        this.decreasePagination(originalLength - state.entities.length);
        this.next(state);
    };
    EntityStore.prototype.trackBy = function (_index, entity) {
        return entity[this.options.idKey];
    };
    EntityStore.prototype.clear = function () {
        var state = this.snapshot;
        state.pageIndex = 1;
        state.entities = [];
        state.pagination = null;
    };
    return EntityStore;
}(Store));
export { EntityStore };
//# sourceMappingURL=entity-store.js.map