import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ThyDialogRef } from '../dialog-ref';
import { ThyConfirmConfig } from '../confirm.config';
export declare class ThyConfirmComponent implements OnInit, OnDestroy {
    private dialogRef;
    private changeDetectorRef;
    private defaultConfig;
    loading: boolean;
    options: ThyConfirmConfig;
    title: string;
    content: string;
    okText: string;
    okType: string;
    cancelText: string;
    okLoadingText: string;
    constructor(dialogRef: ThyDialogRef<ThyConfirmComponent>, changeDetectorRef: ChangeDetectorRef, defaultConfig: ThyConfirmConfig);
    ngOnInit(): void;
    confirm(): void;
    close(): void;
    ngOnDestroy(): void;
}
