import { InjectionToken } from '@angular/core';
export declare const META_KEY = "__THY_META__";
export declare const ROOT_STATE_TOKEN: InjectionToken<any>;
export declare const FEATURE_STATE_TOKEN: InjectionToken<any>;
export interface StoreMetaInfo {
    actions: any;
    path: string;
    children: any[];
    instance: any;
}
export interface Id {
    toString(): string;
}
export interface PaginationInfo {
    count?: number;
    pageCount?: number;
    pageIndex?: number;
    pageSize?: number;
}