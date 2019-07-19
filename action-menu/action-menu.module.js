var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyActionMenuToggleDirective } from './action-menu-toggle.component';
import { ThyActionMenuComponent, ThyActionMenuDividerComponent, ThyActionMenuItemDirective, ThyActionMenuItemIconDirective, ThyActionMenuItemNameDirective, ThyActionMenuItemExtendIconDirective, ThyActionMenuItemMetaDirective, ThyActionMenuItemInfoDirective, ThyActionMenuSubItemDirective, ThyActionMenuDividerTitleDirective, ThyActionMenuItemActiveDirective, } from './action-menu.component';
import { ThyPopBoxModule } from '../pop-box';
var ThyActionMenuModule = /** @class */ (function () {
    function ThyActionMenuModule() {
    }
    ThyActionMenuModule = __decorate([
        NgModule({
            declarations: [
                ThyActionMenuToggleDirective,
                ThyActionMenuComponent,
                ThyActionMenuDividerComponent,
                ThyActionMenuItemDirective,
                ThyActionMenuItemIconDirective,
                ThyActionMenuItemNameDirective,
                ThyActionMenuItemExtendIconDirective,
                ThyActionMenuItemMetaDirective,
                ThyActionMenuItemInfoDirective,
                ThyActionMenuSubItemDirective,
                ThyActionMenuDividerTitleDirective,
                ThyActionMenuItemActiveDirective,
            ],
            imports: [
                CommonModule,
                ThyPopBoxModule
            ],
            providers: [],
            exports: [
                ThyActionMenuToggleDirective,
                ThyActionMenuComponent,
                ThyActionMenuDividerComponent,
                ThyActionMenuItemDirective,
                ThyActionMenuItemIconDirective,
                ThyActionMenuItemNameDirective,
                ThyActionMenuItemExtendIconDirective,
                ThyActionMenuItemMetaDirective,
                ThyActionMenuItemInfoDirective,
                ThyActionMenuSubItemDirective,
                ThyActionMenuDividerTitleDirective,
                ThyActionMenuItemActiveDirective,
            ]
        })
    ], ThyActionMenuModule);
    return ThyActionMenuModule;
}());
export { ThyActionMenuModule };
//# sourceMappingURL=action-menu.module.js.map