var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, HostBinding, Input, ElementRef } from '@angular/core';
import { UpdateHostClassService } from '../shared';
var inputGroupSizeMap = {
    'xs': ['form-control-xs'],
    'sm': ['form-control-sm'],
    'md': ['form-control-md'],
    'lg': ['form-control-lg']
};
var ThyInputDirective = /** @class */ (function () {
    function ThyInputDirective(updateHostClassService, elementRef) {
        this.updateHostClassService = updateHostClassService;
        this.elementRef = elementRef;
        this._isFormControl = true;
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    Object.defineProperty(ThyInputDirective.prototype, "thySize", {
        set: function (size) {
            if (size && inputGroupSizeMap[size]) {
                this.updateHostClassService.updateClass(inputGroupSizeMap[size]);
            }
            else {
                this.updateHostClassService.updateClass([]);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        HostBinding('class.form-control'),
        __metadata("design:type", Object)
    ], ThyInputDirective.prototype, "_isFormControl", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyInputDirective.prototype, "thySize", null);
    ThyInputDirective = __decorate([
        Directive({
            selector: '[thyInput]',
            providers: [
                UpdateHostClassService
            ],
        }),
        __metadata("design:paramtypes", [UpdateHostClassService,
            ElementRef])
    ], ThyInputDirective);
    return ThyInputDirective;
}());
export { ThyInputDirective };
//# sourceMappingURL=input.directive.js.map