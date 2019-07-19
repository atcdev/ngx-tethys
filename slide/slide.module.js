var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ThySharedModule } from '../shared';
import { ThySlideService } from './slide.service';
import { ThySlideContainerComponent } from './slide-container.component';
import { ThySlideRef } from './slide-ref.service';
import { ThySlideLayoutComponent } from './slide-layout/slide-layout.component';
import { ThySlideHeaderComponent } from './slide-header/slide-header.component';
import { ThySlideBodyComponent } from './slide-body/slide-body.component';
import { ThySlideBodySectionComponent } from './slide-body/slide-body-section.component';
import { ThySlideFooterComponent } from './slide-footer/slide-footer.component';
var ThySlideModule = /** @class */ (function () {
    function ThySlideModule() {
    }
    ThySlideModule = __decorate([
        NgModule({
            declarations: [
                ThySlideContainerComponent,
                ThySlideLayoutComponent,
                ThySlideHeaderComponent,
                ThySlideBodyComponent,
                ThySlideBodySectionComponent,
                ThySlideFooterComponent
            ],
            entryComponents: [
                ThySlideContainerComponent
            ],
            imports: [
                CommonModule,
                ThySharedModule,
            ],
            exports: [
                ThySlideLayoutComponent,
                ThySlideHeaderComponent,
                ThySlideBodyComponent,
                ThySlideBodySectionComponent,
                ThySlideFooterComponent
            ],
            providers: [
                ComponentLoaderFactory,
                ThySlideService,
                ThySlideRef
            ]
        })
    ], ThySlideModule);
    return ThySlideModule;
}());
export { ThySlideModule };
//# sourceMappingURL=slide.module.js.map