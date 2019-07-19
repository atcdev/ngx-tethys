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
import { coerceArray, isFunction } from './helpers';
var Producer = /** @class */ (function () {
    function Producer(entities, options) {
        this.idKey = '_id';
        this.entities = entities;
        if (options && options.idKey) {
            this.idKey = options.idKey;
        }
    }
    /**
     * Add an entity or entities.
     *
     * @example
     * produce([users]).add(Entity);
     * produce([users]).add([Entity, Entity]);
     * produce([users]).add(Entity, { prepend: true });
     */
    Producer.prototype.add = function (entity, addOptions) {
        var addEntities = coerceArray(entity);
        if (addEntities.length === 0) {
            return;
        }
        if (addOptions && addOptions.prepend) {
            this.entities = addEntities.concat(this.entities);
        }
        else {
            this.entities = this.entities.concat(addEntities);
        }
        return this.entities;
    };
    Producer.prototype.update = function (idsOrFn, newStateOrFn) {
        var ids = coerceArray(idsOrFn);
        for (var i = 0; i < this.entities.length; i++) {
            var oldEntity = this.entities[i];
            if (ids.indexOf(oldEntity[this.idKey]) >= 0) {
                var newState = isFunction(newStateOrFn) ? newStateOrFn(oldEntity) : newStateOrFn;
                this.entities[i] = __assign({}, oldEntity, newState);
            }
        }
        return this.entities.slice();
    };
    Producer.prototype.remove = function (idsOrFn) {
        var _this = this;
        if (isFunction(idsOrFn)) {
            this.entities = this.entities.filter(function (entity) {
                return !idsOrFn(entity);
            });
        }
        else {
            var ids_1 = coerceArray(idsOrFn);
            this.entities = this.entities.filter(function (entity) {
                return ids_1.indexOf(entity[_this.idKey]) === -1;
            });
        }
        return this.entities;
    };
    return Producer;
}());
export { Producer };
export function produce(entities, options) {
    return new Producer(entities, options);
}
//# sourceMappingURL=immutable.js.map