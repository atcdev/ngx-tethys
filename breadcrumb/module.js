var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyBreadcrumbComponent } from './breadcrumb.component';
import { ThyBreadcrumbItemComponent } from './breadcrumb-item.component';
var ThyBreadcrumbModule = /** @class */ (function () {
    function ThyBreadcrumbModule() {
    }
    ThyBreadcrumbModule = __decorate([
        NgModule({
            declarations: [
                ThyBreadcrumbComponent,
                ThyBreadcrumbItemComponent
            ],
            imports: [
                CommonModule
            ],
            exports: [
                ThyBreadcrumbComponent,
                ThyBreadcrumbItemComponent
            ]
        })
    ], ThyBreadcrumbModule);
    return ThyBreadcrumbModule;
}());
export { ThyBreadcrumbModule };
//# sourceMappingURL=module.js.map