import { OnInit } from '@angular/core';
import { ThyDialog } from '../dialog.service';
export declare class DialogBodyComponent implements OnInit {
    private dialog;
    _isDialogBody: boolean;
    thyClearPaddingClassName: boolean;
    thyClearPadding: string;
    constructor(dialog: ThyDialog);
    ngOnInit(): void;
}
