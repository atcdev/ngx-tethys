import { Constructor } from './constructor';
export interface ThyCanDisable {
    thyDisabled: boolean;
}
export declare type ThyCanDisableCtor = Constructor<ThyCanDisable>;
/** Mixin to augment a directive with a `disableRipple` property. */
export declare function mixinDisabled<T extends Constructor<{}>>(base: T): ThyCanDisableCtor & T;