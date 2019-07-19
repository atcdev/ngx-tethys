var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyFileSelectComponent } from './file-select.component';
import { ThyFileDropComponent } from './file-drop.component';
import { ThyUploaderService } from './uploader.service';
import { ThyDirectiveModule } from '../directive';
var ThyUploaderModule = /** @class */ (function () {
    function ThyUploaderModule() {
    }
    ThyUploaderModule = __decorate([
        NgModule({
            declarations: [
                ThyFileSelectComponent,
                ThyFileDropComponent,
            ],
            imports: [
                CommonModule,
                ThyDirectiveModule
            ],
            entryComponents: [
                ThyFileDropComponent,
            ],
            providers: [
                ThyUploaderService
            ],
            exports: [
                ThyFileSelectComponent,
                ThyFileDropComponent,
            ]
        })
    ], ThyUploaderModule);
    return ThyUploaderModule;
}());
export { ThyUploaderModule };
//# sourceMappingURL=module.js.map