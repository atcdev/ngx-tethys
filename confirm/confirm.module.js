var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyConfirmComponent } from './confirm.component';
import { ThyConfirmService } from './confirm.service';
import { ThyModalModule } from '../modal/modal.module';
import { ThyButtonModule } from '../button/button.module';
var ThyConfirmModule = /** @class */ (function () {
    function ThyConfirmModule() {
    }
    ThyConfirmModule = __decorate([
        NgModule({
            declarations: [
                ThyConfirmComponent
            ],
            entryComponents: [
                ThyConfirmComponent,
            ],
            providers: [
                ThyConfirmService,
            ],
            imports: [
                ThyModalModule,
                ThyButtonModule,
                CommonModule,
            ],
            exports: [
                ThyConfirmComponent
            ]
        })
    ], ThyConfirmModule);
    return ThyConfirmModule;
}());
export { ThyConfirmModule };
//# sourceMappingURL=confirm.module.js.map