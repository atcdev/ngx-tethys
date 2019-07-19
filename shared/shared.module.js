var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ThyTranscludeDirective } from './ng-transclude.directive';
import { ThyTranslate } from './translate';
// import { ThyDraggableDirective } from './draggable.directive';
import { ThyPositioningService } from '../positioning/positioning.service';
var ThySharedModule = /** @class */ (function () {
    function ThySharedModule() {
    }
    ThySharedModule = __decorate([
        NgModule({
            declarations: [
                ThyTranscludeDirective,
            ],
            exports: [
                ThyTranscludeDirective,
            ],
            providers: [
                ThyTranslate,
                ThyPositioningService
            ]
        })
    ], ThySharedModule);
    return ThySharedModule;
}());
export { ThySharedModule };
//# sourceMappingURL=shared.module.js.map