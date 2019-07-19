import { OnInit } from '@angular/core';
export declare class ThyAlertComponent implements OnInit {
    thyType: string;
    thyMessage: string;
    thyIcon: boolean | string;
    private _typeIcon;
    private _showIcon;
    private _icon;
    constructor();
    ngOnInit(): void;
}
