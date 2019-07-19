import { ElementRef, OnInit } from '@angular/core';
export declare class ThyBadgeComponent implements OnInit {
    private elementRef;
    displayContent: string;
    badgeClassName: string;
    private nativeElement;
    private _initialized;
    private badgeClassNameMap;
    st: {
        value: number | string | any;
        isValueOfString: boolean;
        isSetValue: boolean;
        isValueKeepShow: boolean;
        max: {
            is: boolean;
            value: number;
        };
        isElement: boolean;
        isSup: boolean;
        isShowBadge: boolean;
    };
    constructor(elementRef: ElementRef);
    containerClassName: boolean;
    thyType: string;
    thyCount: number;
    thyContext: string;
    thyMaxCount: number;
    thySize: string;
    thyIsDot: boolean;
    thyIsHollow: boolean;
    thyKeepShow: boolean;
    ngOnInit(): void;
    private combineBadgeClassName;
    private combineBadgeDisplayContent;
    private explorationValueLength;
    private resetBadgeClassNameMap;
}
