var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ROOT_STATE_TOKEN, FEATURE_STATE_TOKEN } from './types';
var RootStoreModule = /** @class */ (function () {
    function RootStoreModule() {
    }
    RootStoreModule = __decorate([
        NgModule()
    ], RootStoreModule);
    return RootStoreModule;
}());
export { RootStoreModule };
var FeatureStoreModule = /** @class */ (function () {
    function FeatureStoreModule() {
    }
    FeatureStoreModule = __decorate([
        NgModule()
    ], FeatureStoreModule);
    return FeatureStoreModule;
}());
export { FeatureStoreModule };
var ThyStoreModule = /** @class */ (function () {
    function ThyStoreModule() {
    }
    ThyStoreModule.forRoot = function (stores) {
        if (stores === void 0) { stores = []; }
        return {
            ngModule: RootStoreModule,
            providers: stores.concat([
                {
                    provide: ROOT_STATE_TOKEN,
                    useValue: stores
                }
            ])
        };
    };
    ThyStoreModule.forFeature = function (stores) {
        if (stores === void 0) { stores = []; }
        return {
            ngModule: FeatureStoreModule,
            providers: stores.concat([
                {
                    provide: FEATURE_STATE_TOKEN,
                    useValue: stores
                }
            ])
        };
    };
    ThyStoreModule = __decorate([
        NgModule({})
    ], ThyStoreModule);
    return ThyStoreModule;
}());
export { ThyStoreModule };
//# sourceMappingURL=module.js.map