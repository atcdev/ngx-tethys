import { ModuleWithProviders } from '@angular/core';
export declare class RootStoreModule {
}
export declare class FeatureStoreModule {
}
export declare class ThyStoreModule {
    static forRoot(stores?: any[]): ModuleWithProviders;
    static forFeature(stores?: any[]): ModuleWithProviders;
}
