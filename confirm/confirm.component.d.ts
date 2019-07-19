import { OnInit, OnDestroy } from '@angular/core';
import { ThyModalService } from '../modal/modal.service';
import { ConfirmButtonsOption } from './confirm-option.interface';
export declare class ThyConfirmComponent implements OnInit, OnDestroy {
    private modalService;
    loading: boolean;
    title: string;
    content: string;
    contentValues: any;
    buttons: ConfirmButtonsOption;
    private _confirmAction$;
    constructor(modalService: ThyModalService);
    ngOnInit(): void;
    confirm(): any;
    closeModal(): void;
    ngOnDestroy(): void;
}
