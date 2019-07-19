var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyMenuComponent } from './menu.component';
import { ThyMenuItemComponent } from './item/menu-item.component';
import { ThyMenuGroupComponent } from './group/menu-group.component';
import { ThyMenuItemNameComponent } from './item/name/menu-item-name.component';
import { ThyMenuItemIconComponent } from './item/icon/menu-item-icon.component';
import { ThyMenuItemActionComponent } from './item/action/menu-item-action.component';
import { ThyMenuDividerComponent } from './divider/menu-divider.component';
var ThyMenuModule = /** @class */ (function () {
    function ThyMenuModule() {
    }
    ThyMenuModule = __decorate([
        NgModule({
            declarations: [
                ThyMenuComponent,
                ThyMenuGroupComponent,
                ThyMenuItemComponent,
                ThyMenuItemNameComponent,
                ThyMenuItemIconComponent,
                ThyMenuItemActionComponent,
                ThyMenuDividerComponent
            ],
            imports: [CommonModule],
            exports: [
                ThyMenuComponent,
                ThyMenuGroupComponent,
                ThyMenuItemComponent,
                ThyMenuItemNameComponent,
                ThyMenuItemIconComponent,
                ThyMenuItemActionComponent,
                ThyMenuDividerComponent
            ]
        })
    ], ThyMenuModule);
    return ThyMenuModule;
}());
export { ThyMenuModule };
//# sourceMappingURL=menu.module.js.map