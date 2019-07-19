var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { ThyDialogContainerComponent } from './dialog-container.component';
import { ThyDialog } from './dialog.service';
import { DialogHeaderComponent } from './header/dialog-header.component';
import { DialogBodyComponent } from './body/dialog-body.component';
import { DialogFooterComponent } from './footer/dialog-footer.component';
import { ThyButtonModule } from '../button';
import { THY_DIALOG_DEFAULT_OPTIONS_PROVIDER } from './dialog.config';
import { ThyConfirmComponent } from './confirm/confirm.component';
import { THY_CONFIRM_DEFAULT_OPTIONS_PROVIDER } from './confirm.config';
var ThyDialogModule = /** @class */ (function () {
    function ThyDialogModule() {
    }
    ThyDialogModule = __decorate([
        NgModule({
            declarations: [
                ThyDialogContainerComponent,
                DialogHeaderComponent,
                DialogBodyComponent,
                DialogFooterComponent,
                ThyConfirmComponent
            ],
            imports: [CommonModule, PortalModule, OverlayModule, ThyButtonModule],
            providers: [ThyDialog, THY_DIALOG_DEFAULT_OPTIONS_PROVIDER, THY_CONFIRM_DEFAULT_OPTIONS_PROVIDER],
            entryComponents: [ThyDialogContainerComponent, ThyConfirmComponent],
            exports: [ThyDialogContainerComponent, DialogHeaderComponent, DialogBodyComponent, DialogFooterComponent]
        })
    ], ThyDialogModule);
    return ThyDialogModule;
}());
export { ThyDialogModule };
//# sourceMappingURL=dialog.module.js.map