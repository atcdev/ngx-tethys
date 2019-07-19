import { OnInit, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ThyFormDirective } from './form.directive';
export declare class ThyFormSubmitDirective implements OnInit {
    private ngForm;
    private thyFormDirective;
    thyFormSubmit: EventEmitter<{}>;
    constructor(ngForm: NgForm, thyFormDirective: ThyFormDirective);
    ngOnInit(): void;
    onSubmit($event: any): void;
}
