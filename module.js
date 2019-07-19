var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThyButtonModule } from './button';
import { ThyLayoutModule } from './layout';
import { ThyPopBoxModule } from './pop-box';
import { ThyGridModule } from './grid';
import { ThyAvatarModule } from './avatar';
import { ThyBadgeModule } from './badge';
import { ThyLabelModule } from './label';
import { ThyNavModule } from './nav';
import { ThyMenuModule } from './menu';
import { ThyPaginationModule } from './pagination';
import { ThyModalModule } from './modal';
import { ThyCardModule } from './card';
import { ThyLoadingModule } from './loading';
import { ThyAlertModule } from './alert';
import { ThyActionMenuModule } from './action-menu';
import { ThyConfirmModule } from './confirm';
import { ThyTreeModule } from './tree/tree.module';
import { ThyDatepickerModule } from './datepicker';
import { ThyDatepickerNextModule } from './datepicker-next';
import { ThyNotifyModule } from './notify';
import { ThyEmptyModule } from './empty';
import { ThySwitchModule } from './switch';
import { ThyTransferModule } from './transfer';
import { ThyFormModule } from './form';
import { ThyInputModule } from './input';
import { ThyDropdownModule } from './dropdown';
import { ThyDirectiveModule } from './directive';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ThyCheckboxModule } from './checkbox';
import { ThyRadioModule } from './radio';
import { ThySelectModule } from './select';
import { ThySlideModule } from './slide';
import { ThyPropertyOperationModule } from './property-operation';
import { ThyUploaderModule } from './uploader';
import { ThyEditorModule } from './editor';
import { ThyDateRangeModule } from './date-range';
// import { ThyKeySelectModule } from './key-select';
import { ThyListModule } from './list';
import { ThyTreeSelectModule } from './tree-select';
import { ThyStrengthModule } from './strength';
import { ThyStepperModule } from './stepper';
import { ThyCascaderModule } from './cascader';
import { ThyDialogModule } from './dialog';
import { ThyBreadcrumbModule } from './breadcrumb';
var IMPORT_EXPORT_MODULES = [
    BrowserAnimationsModule,
    ThyLayoutModule,
    ThyButtonModule,
    ThyPopBoxModule,
    ThyBadgeModule,
    ThyGridModule,
    ThyAvatarModule,
    ThyLabelModule,
    ThyNavModule,
    ThyMenuModule,
    ThyPaginationModule,
    ThyModalModule,
    ThyNotifyModule,
    ThyCardModule,
    ThyLoadingModule,
    ThyAlertModule,
    ThyDatepickerModule,
    ThyDatepickerNextModule,
    ThyActionMenuModule,
    ThyConfirmModule,
    ThyTreeModule,
    ThyEmptyModule,
    ThySwitchModule,
    ThyTransferModule,
    ThyStrengthModule,
    ThyFormModule,
    ThyInputModule,
    ThyDropdownModule,
    ThyDirectiveModule,
    ProgressbarModule,
    ThyCheckboxModule,
    ThySelectModule,
    ThySlideModule,
    ThyRadioModule,
    ThySelectModule,
    ThyPropertyOperationModule,
    ThyUploaderModule,
    ThyEditorModule,
    ThyDateRangeModule,
    // ThyKeySelectModule,
    ThyListModule,
    ThyTreeSelectModule,
    ThyStepperModule,
    ThyCascaderModule,
    ThyDialogModule,
    ThyBreadcrumbModule
];
var NgxTethysModule = /** @class */ (function () {
    function NgxTethysModule() {
    }
    NgxTethysModule_1 = NgxTethysModule;
    NgxTethysModule.forRoot = function () {
        return {
            ngModule: NgxTethysModule_1,
            providers: []
        };
    };
    var NgxTethysModule_1;
    NgxTethysModule = NgxTethysModule_1 = __decorate([
        NgModule({
            declarations: [],
            imports: [ProgressbarModule.forRoot()].concat(IMPORT_EXPORT_MODULES),
            exports: IMPORT_EXPORT_MODULES,
            providers: []
        })
    ], NgxTethysModule);
    return NgxTethysModule;
}());
export { NgxTethysModule };
//# sourceMappingURL=module.js.map