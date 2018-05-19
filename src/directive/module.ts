import { NgModule } from '@angular/core';
import { ThyRowDirective } from './thy-row.directive';
import { ThyColDirective } from './thy-clo.directive';
import { ThyAutofocusDirective } from './thy-autofocus.directive';
import { ThyEnterDirective } from './thy-enter.directive';
import { ThyShowDirective } from './thy-show';
import { ThyStopPropagationDirective } from './thy-stop-propagation.directive';

@NgModule({
    declarations: [
        ThyRowDirective,
        ThyColDirective,
        ThyAutofocusDirective,
        ThyEnterDirective,
        ThyShowDirective,
        ThyStopPropagationDirective
    ],
    exports: [
        ThyRowDirective,
        ThyColDirective,
        ThyAutofocusDirective,
        ThyEnterDirective,
        ThyShowDirective,
        ThyStopPropagationDirective
    ]
})
export class ThyDirectiveModule {

}