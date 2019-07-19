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
import { Subject } from 'rxjs';
/** Mixin to augment a directive with a `disableRipple` property. */
export function mixinUnsubscribe(base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this.ngUnsubscribe$ = new Subject();
            return _this;
        }
        class_1.prototype.ngOnDestroy = function () {
            this.ngUnsubscribe$.next();
            this.ngUnsubscribe$.complete();
        };
        return class_1;
    }(base));
}
//# sourceMappingURL=unsubscribe.js.map