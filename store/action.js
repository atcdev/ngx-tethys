import { findAndCreateStoreMetadata } from './util';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { ActionState } from './action-state';
/**
 * Decorates a method with a action information.
 */
export function Action(action) {
    return function (target, name, descriptor) {
        var meta = findAndCreateStoreMetadata(target);
        // default use function name as action type
        if (!action) {
            action = {
                type: name
            };
        }
        // support string for type
        if (typeof action === 'string') {
            action = {
                type: action
            };
        }
        var type = action.type;
        if (!action.type) {
            throw new Error("Action " + action.type + " is missing a static \"type\" property");
        }
        var originalFn = descriptor.value;
        meta.actions[type] = {
            fn: name,
            originalFn: originalFn,
            type: type
        };
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            ActionState.changeAction(target.constructor.name + "-" + name);
            var result = originalFn.call.apply(originalFn, [this].concat(args, [this.snapshot]));
            if (result instanceof Observable) {
                result = result.pipe(shareReplay());
                result.subscribe();
            }
            return result;
        };
    };
}
//# sourceMappingURL=action.js.map