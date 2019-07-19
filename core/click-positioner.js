var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ThyClickDispatcher } from './event-dispatchers';
import * as i0 from "@angular/core";
import * as i1 from "./event-dispatchers/click-dispatcher";
var ThyClickPositioner = /** @class */ (function () {
    function ThyClickPositioner(clickDispatcher) {
        this.clickDispatcher = clickDispatcher;
        this.lastPosition = null;
        this.initialized = false;
    }
    Object.defineProperty(ThyClickPositioner.prototype, "lastClickPosition", {
        get: function () {
            return this.lastPosition;
        },
        enumerable: true,
        configurable: true
    });
    ThyClickPositioner.prototype.runTaskUseLastPosition = function (task) {
        var _this = this;
        setTimeout(function () {
            task(_this.lastClickPosition);
        });
    };
    ThyClickPositioner.prototype.initialize = function () {
        var _this = this;
        if (this.initialized) {
            return;
        }
        this.initialized = true;
        this.clickDispatcher.clicked(0).subscribe(function (event) {
            _this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    };
    ThyClickPositioner.ngInjectableDef = i0.defineInjectable({ factory: function ThyClickPositioner_Factory() { return new ThyClickPositioner(i0.inject(i1.ThyClickDispatcher)); }, token: ThyClickPositioner, providedIn: "root" });
    ThyClickPositioner = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ThyClickDispatcher])
    ], ThyClickPositioner);
    return ThyClickPositioner;
}());
export { ThyClickPositioner };
//# sourceMappingURL=click-positioner.js.map