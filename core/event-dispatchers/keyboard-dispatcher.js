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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { ThyEventDispatcher } from './event-dispatcher';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var DEFAULT_KEYDOWN_TIME = 100;
var ThyKeyboardDispatcher = /** @class */ (function (_super) {
    __extends(ThyKeyboardDispatcher, _super);
    function ThyKeyboardDispatcher(document, ngZone) {
        return _super.call(this, document, ngZone, 'keydown') || this;
    }
    ThyKeyboardDispatcher.prototype.keydown = function (auditTimeInMs) {
        if (auditTimeInMs === void 0) { auditTimeInMs = DEFAULT_KEYDOWN_TIME; }
        return this.subscribe(auditTimeInMs);
    };
    ThyKeyboardDispatcher.ngInjectableDef = i0.defineInjectable({ factory: function ThyKeyboardDispatcher_Factory() { return new ThyKeyboardDispatcher(i0.inject(i1.DOCUMENT), i0.inject(i0.NgZone)); }, token: ThyKeyboardDispatcher, providedIn: "root" });
    ThyKeyboardDispatcher = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __param(0, Inject(DOCUMENT)),
        __metadata("design:paramtypes", [Object, NgZone])
    ], ThyKeyboardDispatcher);
    return ThyKeyboardDispatcher;
}(ThyEventDispatcher));
export { ThyKeyboardDispatcher };
//# sourceMappingURL=keyboard-dispatcher.js.map