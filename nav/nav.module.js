var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyNavComponent } from './nav.component';
import { ThyNavLinkDirective } from './nav-link.directive';
var ThyNavModule = /** @class */ (function () {
    function ThyNavModule() {
    }
    ThyNavModule = __decorate([
        NgModule({
            declarations: [
                ThyNavComponent,
                ThyNavLinkDirective
            ],
            imports: [
                CommonModule
            ],
            exports: [
                ThyNavComponent,
                ThyNavLinkDirective
            ]
        })
    ], ThyNavModule);
    return ThyNavModule;
}());
export { ThyNavModule };
//# sourceMappingURL=nav.module.js.map