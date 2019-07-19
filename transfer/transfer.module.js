var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyTransferComponent } from './transfer.component';
import { ThyTransferListComponent } from './transfer-list.component';
import { ThyButtonModule } from '../button/button.module';
import { SortablejsModule } from 'angular-sortablejs/dist';
var ThyTransferModule = /** @class */ (function () {
    function ThyTransferModule() {
    }
    ThyTransferModule = __decorate([
        NgModule({
            declarations: [
                ThyTransferComponent,
                ThyTransferListComponent
            ],
            imports: [
                CommonModule,
                ThyButtonModule,
                SortablejsModule
            ],
            exports: [
                ThyTransferComponent
            ]
        })
    ], ThyTransferModule);
    return ThyTransferModule;
}());
export { ThyTransferModule };
//# sourceMappingURL=transfer.module.js.map