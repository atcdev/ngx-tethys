var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Renderer2 } from '@angular/core';
var UpdateHostClassService = /** @class */ (function () {
    function UpdateHostClassService(renderer) {
        this.renderer = renderer;
        this._classNames = [];
    }
    UpdateHostClassService.prototype.initializeElement = function (nativeElement) {
        this._hostElement = nativeElement;
    };
    UpdateHostClassService.prototype.updateClass = function (classNames) {
        var _this = this;
        if (this._classNames) {
            this._classNames.forEach(function (className) {
                if (classNames.indexOf(className) < 0) {
                    _this.removeClass(className);
                }
            });
        }
        var newClasses = [];
        classNames.forEach(function (className) {
            if (className) {
                newClasses.push(className);
                if (_this._classNames.indexOf(className) < 0) {
                    _this.addClass(className);
                }
            }
        });
        this._classNames = newClasses;
    };
    UpdateHostClassService.prototype.updateClassByMap = function (classMap) {
        var newClasses = [];
        for (var key in classMap) {
            if (classMap.hasOwnProperty(key) && classMap[key]) {
                newClasses.push(key);
            }
        }
        this.updateClass(newClasses);
    };
    UpdateHostClassService.prototype.addClass = function (className) {
        this.renderer.addClass(this._hostElement, className);
    };
    UpdateHostClassService.prototype.removeClass = function (className) {
        this.renderer.removeClass(this._hostElement, className);
    };
    UpdateHostClassService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Renderer2])
    ], UpdateHostClassService);
    return UpdateHostClassService;
}());
export { UpdateHostClassService };
//# sourceMappingURL=update-host-class.service.js.map