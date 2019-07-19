var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ThyEmptyComponent } from './empty.component';
import { ThyEmptyConfig } from './empty.config';
import { ThySharedModule } from '../shared';
var ThyEmptyModule = /** @class */ (function () {
    function ThyEmptyModule() {
    }
    ThyEmptyModule = __decorate([
        NgModule({
            declarations: [
                ThyEmptyComponent
            ],
            imports: [
                CommonModule,
                ThySharedModule
            ],
            exports: [
                ThyEmptyComponent
            ],
            providers: [
                ThyEmptyConfig
            ]
        })
    ], ThyEmptyModule);
    return ThyEmptyModule;
}());
export { ThyEmptyModule };
//# sourceMappingURL=empty.module.js.map