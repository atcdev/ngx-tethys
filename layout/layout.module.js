var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyLayoutComponent } from './layout.component';
import { ThyHeaderComponent } from './header.component';
import { ThyContentComponent } from './content.component';
import { ThySidebarComponent } from './sidebar.component';
import { ThyContentSectionComponent } from './content-section.component';
import { ThyContentMainComponent } from './content-main.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
var ThyLayoutModule = /** @class */ (function () {
    function ThyLayoutModule() {
    }
    ThyLayoutModule = __decorate([
        NgModule({
            declarations: [
                ThyLayoutComponent,
                ThyHeaderComponent,
                ThyContentComponent,
                ThySidebarComponent,
                ThyContentSectionComponent,
                ThyContentMainComponent
            ],
            imports: [CommonModule, DragDropModule],
            exports: [
                ThyLayoutComponent,
                ThyHeaderComponent,
                ThyContentComponent,
                ThySidebarComponent,
                ThyContentSectionComponent,
                ThyContentMainComponent
            ]
        })
    ], ThyLayoutModule);
    return ThyLayoutModule;
}());
export { ThyLayoutModule };
//# sourceMappingURL=layout.module.js.map