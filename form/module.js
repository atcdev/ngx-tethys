var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThyFormDirective } from './form.directive';
import { ThyFormGroupComponent } from './form-group.component';
import { ThyFormGroupLabelDirective } from './form-group-label.directive';
import { ThyFormSubmitDirective } from './form-submit.directive';
import { ThyInputModule } from '../input/module';
import { ThyFormGroupFooterComponent } from './from-group-footer/form-group-footer.component';
import { ThyFormGroupErrorComponent } from './form-group-error/form-group-error.component';
import { ThyFormValidatorLoader } from './form-validator-loader';
import { THY_VALIDATOR_CONFIG } from './form.class';
import { ThyUniqueCheckValidator, ThyMaxDirective, ThyMinDirective } from './validator';
import { ThyAlertModule } from '../alert/alert.module';
var ThyFormModule = /** @class */ (function () {
    function ThyFormModule() {
    }
    ThyFormModule_1 = ThyFormModule;
    ThyFormModule.forRoot = function (config) {
        return {
            ngModule: ThyFormModule_1,
            providers: [
                {
                    provide: THY_VALIDATOR_CONFIG,
                    useValue: config
                }
            ]
        };
    };
    var ThyFormModule_1;
    ThyFormModule = ThyFormModule_1 = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule, ThyInputModule, ThyAlertModule],
            declarations: [
                ThyFormDirective,
                ThyFormGroupComponent,
                ThyFormGroupLabelDirective,
                ThyFormSubmitDirective,
                ThyFormGroupFooterComponent,
                ThyUniqueCheckValidator,
                ThyFormGroupErrorComponent,
                ThyMinDirective,
                ThyMaxDirective
            ],
            exports: [
                ThyFormDirective,
                ThyFormGroupComponent,
                ThyFormGroupLabelDirective,
                ThyFormSubmitDirective,
                ThyFormGroupFooterComponent,
                ThyUniqueCheckValidator,
                ThyFormGroupErrorComponent,
                ThyMinDirective,
                ThyMaxDirective
            ],
            providers: [ThyFormValidatorLoader]
        })
    ], ThyFormModule);
    return ThyFormModule;
}());
export { ThyFormModule };
//# sourceMappingURL=module.js.map