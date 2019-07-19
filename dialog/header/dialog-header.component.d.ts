import { EventEmitter, TemplateRef, OnInit, ElementRef } from '@angular/core';
import { ThyDialog } from '../dialog.service';
import { ThyDialogContainerComponent } from '../dialog-container.component';
import { ThyTranslate } from '../../shared';
export declare class DialogHeaderComponent implements OnInit {
    private elementRef;
    private dialog;
    private translate;
    private dialogContainer;
    _isDialogHeader: boolean;
    headerTemplate: TemplateRef<any>;
    thyTitle: string;
    thyTitleTranslationKey: string;
    thyIcon: string;
    thyOnClose: EventEmitter<Event>;
    constructor(elementRef: ElementRef, dialog: ThyDialog, translate: ThyTranslate, dialogContainer: ThyDialogContainerComponent);
    ngOnInit(): void;
    close(event?: Event): void;
}
