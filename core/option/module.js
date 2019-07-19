/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyListOptionComponent } from './list-option.component';
import { ThyOptionGroupComponent } from './option-group.component';
var ThyOptionModule = /** @class */ (function () {
    function ThyOptionModule() {
    }
    ThyOptionModule = __decorate([
        NgModule({
            imports: [CommonModule],
            exports: [ThyListOptionComponent, ThyOptionGroupComponent],
            declarations: [ThyListOptionComponent, ThyOptionGroupComponent]
        })
    ], ThyOptionModule);
    return ThyOptionModule;
}());
export { ThyOptionModule };
export * from './list-option.component';
export * from './option-group.component';
//# sourceMappingURL=module.js.map