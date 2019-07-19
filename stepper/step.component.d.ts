import { TemplateRef, InjectionToken } from '@angular/core';
export interface IThyStepperComponent {
    selected: ThyStepComponent;
}
export declare const THY_STEPPER_COMPONENT: InjectionToken<IThyStepperComponent>;
export declare class ThyStepComponent {
    stepper: IThyStepperComponent;
    content: TemplateRef<any>;
    label: string;
    constructor(stepper: IThyStepperComponent);
    select(): void;
}