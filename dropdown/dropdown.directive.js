var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, ElementRef } from '@angular/core';
var thyDropdown = 'thyDropdown';
var thyDropdownSplit = 'thyDropdownSplit';
var ThyDropdownDirective = /** @class */ (function () {
    function ThyDropdownDirective(elementRef) {
        this.elementRef = elementRef;
        this._isDropdownClass = true;
        this._isDropdownSplitClass = false;
        var attrs = Array.from(elementRef.nativeElement.attributes);
        if (attrs.find(function (item) { return item.name === thyDropdownSplit.toLocaleLowerCase(); })) {
            this._isDropdownSplitClass = true;
        }
    }
    __decorate([
        HostBinding('class.thy-dropdown-toggle'),
        __metadata("design:type", Object)
    ], ThyDropdownDirective.prototype, "_isDropdownClass", void 0);
    __decorate([
        HostBinding('class.thy-dropdown-toggle-split'),
        __metadata("design:type", Object)
    ], ThyDropdownDirective.prototype, "_isDropdownSplitClass", void 0);
    ThyDropdownDirective = __decorate([
        Directive({
            selector: "[" + thyDropdown + "],[" + thyDropdownSplit + "]"
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyDropdownDirective);
    return ThyDropdownDirective;
}());
export { ThyDropdownDirective };
//# sourceMappingURL=dropdown.directive.js.map