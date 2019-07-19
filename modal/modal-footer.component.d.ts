import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { ModalComponent } from './modal.component';
export declare class ModalFooterComponent implements OnInit {
    private modalComponent;
    footerTemplate: TemplateRef<any>;
    isTemplateRef: boolean;
    savingStatus?: boolean;
    savingText: string;
    thyOnSave: EventEmitter<any>;
    thyOnCancel: EventEmitter<any>;
    thySaving: boolean;
    thySavingText: string;
    thySaveText: string;
    constructor(modalComponent: ModalComponent);
    ngOnInit(): void;
    saveFn(): void;
    cancelFn(): void;
}
