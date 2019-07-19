var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var PopBoxOptions = /** @class */ (function () {
    function PopBoxOptions() {
    }
    PopBoxOptions = __decorate([
        Injectable()
    ], PopBoxOptions);
    return PopBoxOptions;
}());
export { PopBoxOptions };
export var popBoxConfigDefaults = {
    placement: 'bottom center',
    arrow: false,
    keyboardESCClose: true,
    outsideAutoClose: true,
    insideAutoClose: false,
    offset: 0,
    stopPropagation: false,
    append: 'body',
    showMask: false,
    autoClosePrevious: false,
    openedClass: 'thy-pop-box-opened',
    autoAdapt: true
};
//# sourceMappingURL=pop-box-options.class.js.map