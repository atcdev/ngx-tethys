import { QueryList, EventEmitter } from '@angular/core';
import { ThyStepComponent, IThyStepperComponent } from './step.component';
import { ThyStepHeaderComponent } from './step-header.component';
export declare class ThyStepperComponent implements IThyStepperComponent {
    thySelectedIndex: number;
    thySelected: ThyStepComponent;
    thyShowStepHeader: boolean;
    private _selectedIndex;
    selected: ThyStepComponent;
    selectedIndex: number;
    selectionChange: EventEmitter<any>;
    stepHeaders: QueryList<ThyStepHeaderComponent>;
    steps: QueryList<ThyStepComponent>;
    thyStepper: boolean;
    private _updateSelectedItemIndex;
    to(index: number): void;
    next(): void;
    /** Selects and focuses the previous step in list. */
    previous(): void;
}
