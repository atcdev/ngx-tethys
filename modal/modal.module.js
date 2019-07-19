var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyModalService } from './modal.service';
import { ThyButtonModule } from '../button/button.module';
import { ModalComponent } from './modal.component';
import { ModalHeaderComponent } from './modal-header.component';
import { ModalBodyComponent } from './modal-body.component';
import { ModalFooterComponent } from './modal-footer.component';
var ThyModalModule = /** @class */ (function () {
    function ThyModalModule() {
    }
    ThyModalModule = __decorate([
        NgModule({
            declarations: [
                ModalComponent,
                ModalHeaderComponent,
                ModalBodyComponent,
                ModalFooterComponent
            ],
            imports: [
                CommonModule,
                ThyButtonModule
            ],
            exports: [
                ModalComponent,
                ModalHeaderComponent,
                ModalBodyComponent,
                ModalFooterComponent
            ],
            providers: [
                ThyModalService
            ]
        })
    ], ThyModalModule);
    return ThyModalModule;
}());
export { ThyModalModule };
//# sourceMappingURL=modal.module.js.map