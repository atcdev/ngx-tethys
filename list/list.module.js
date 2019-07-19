var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyListComponent } from './list.component';
import { ThyListItemComponent } from './list-item.component';
import { ThySelectionListComponent } from './selection/selection-list';
// import { ThyListOptionComponent } from './option/option';
import { ThyOptionModule } from '../core/option';
var ThyListModule = /** @class */ (function () {
    function ThyListModule() {
    }
    ThyListModule = __decorate([
        NgModule({
            declarations: [
                ThyListComponent,
                ThyListItemComponent,
                ThySelectionListComponent
            ],
            imports: [
                CommonModule,
                ThyOptionModule
            ],
            exports: [
                ThyListComponent,
                ThyListItemComponent,
                ThySelectionListComponent,
                ThyOptionModule
            ]
        })
    ], ThyListModule);
    return ThyListModule;
}());
export { ThyListModule };
//# sourceMappingURL=list.module.js.map