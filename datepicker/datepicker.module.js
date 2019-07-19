var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { ThyButtonModule } from '../button/button.module';
import { ThyDatepickerFormatPipe } from './pipe';
import { ThyDatepickerDirective } from './datepicker.directive';
import { ThyDaterangepickerDirective } from './daterangepicker.directive';
import { ThyDatepickerContainerComponent } from './datepicker-container.component';
import { ThyDaterangepickerContainerComponent } from './daterangepicker-container.component';
import { ThyDatepickerConfig } from './datepicker.config';
import { ThyDatepickerService } from './datepicker.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThyDaterangepickerConfig } from './daterangepicker.config';
var ThyDatepickerModule = /** @class */ (function () {
    function ThyDatepickerModule() {
    }
    ThyDatepickerModule = __decorate([
        NgModule({
            declarations: [
                ThyDatepickerContainerComponent,
                ThyDaterangepickerContainerComponent,
                ThyDatepickerDirective,
                ThyDaterangepickerDirective,
                ThyDatepickerFormatPipe
            ],
            entryComponents: [ThyDatepickerContainerComponent, ThyDaterangepickerContainerComponent],
            imports: [CommonModule, FormsModule, ThyButtonModule, BsDatepickerModule.forRoot(), TimepickerModule.forRoot()],
            exports: [BsDatepickerModule, ThyDatepickerDirective, ThyDaterangepickerDirective, ThyDatepickerFormatPipe],
            providers: [ThyDatepickerConfig, ThyDaterangepickerConfig, ThyDatepickerService]
        })
    ], ThyDatepickerModule);
    return ThyDatepickerModule;
}());
export { ThyDatepickerModule };
//# sourceMappingURL=datepicker.module.js.map