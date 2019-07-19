var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding } from '@angular/core';
var ThyDatepickerNextComponent = /** @class */ (function () {
    function ThyDatepickerNextComponent() {
        this.className = true;
    }
    ThyDatepickerNextComponent.prototype.ngOnInit = function () { };
    __decorate([
        HostBinding('class.thy-datepicker-next'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextComponent.prototype, "className", void 0);
    ThyDatepickerNextComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next',
            template: "<div class=\"has-feedback col-form-control\"> <input type=\"text\" class=\"form-control\" thyDatepickerNextAction readonly placeholder=\"选择时间\"> <span class=\"form-control-feedback wtf wtf-begin-date-o\"></span> </div> "
        }),
        __metadata("design:paramtypes", [])
    ], ThyDatepickerNextComponent);
    return ThyDatepickerNextComponent;
}());
export { ThyDatepickerNextComponent };
//# sourceMappingURL=datepicker-next.component.js.map