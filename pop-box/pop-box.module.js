var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ThyPopBoxService } from './pop-box.service';
import { PopBoxRef } from './pop-box-ref.service';
import { PopBoxContainerComponent } from './pop-box-container.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ThySharedModule } from '../shared';
import { ThyPopBoxHeader } from './header/pop-box-header.component';
import { ThyPopBoxBody } from './body/pop-box-body.component';
import { ThyPopBoxFooter } from './footer/pop-box-footer.component';
import { ThyPopBoxTriggerDirective } from './pop-box-trigger.directive';
import { CommonModule } from '@angular/common';
var ThyPopBoxModule = /** @class */ (function () {
    function ThyPopBoxModule() {
    }
    ThyPopBoxModule = __decorate([
        NgModule({
            declarations: [
                PopBoxContainerComponent,
                ThyPopBoxHeader,
                ThyPopBoxBody,
                ThyPopBoxFooter,
                ThyPopBoxTriggerDirective
            ],
            entryComponents: [
                PopBoxContainerComponent
            ],
            imports: [
                CommonModule,
                ThySharedModule
            ],
            exports: [
                ThyPopBoxHeader,
                ThyPopBoxBody,
                ThyPopBoxFooter,
                ThyPopBoxTriggerDirective
            ],
            providers: [
                ThyPopBoxService,
                PopBoxRef,
                ComponentLoaderFactory
            ]
        })
    ], ThyPopBoxModule);
    return ThyPopBoxModule;
}());
export { ThyPopBoxModule };
//# sourceMappingURL=pop-box.module.js.map