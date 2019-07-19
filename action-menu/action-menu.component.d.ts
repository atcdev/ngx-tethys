export declare type ThyActionMenuTheme = 'default' | 'group';
export declare class ThyActionMenuComponent {
    className: boolean;
    themeClassName: boolean;
    styleWidth: string;
    thyTheme: ThyActionMenuTheme;
    thyWidth: string;
    constructor();
}
export declare class ThyActionMenuItemDirective {
    className: boolean;
    disabled: boolean;
    thyDisabled: boolean;
    onClick(event: Event): void;
    constructor();
}
export declare class ThyActionMenuItemIconDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuItemNameDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuItemMetaDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuItemInfoDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuItemExtendIconDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuSubItemDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuDividerComponent {
    title: string;
    className: boolean;
    thyTitle: string;
    constructor();
}
export declare class ThyActionMenuDividerTitleDirective {
    className: boolean;
    constructor();
}
export declare class ThyActionMenuItemActiveDirective {
    _isActive: boolean;
    thyActionMenuItemActive: boolean;
    constructor();
}
