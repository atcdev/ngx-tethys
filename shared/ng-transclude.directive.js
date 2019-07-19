var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var ThyTranscludeDirective = /** @class */ (function () {
    function ThyTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(ThyTranscludeDirective.prototype, "thyTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], ThyTranscludeDirective.prototype, "thyTransclude", null);
    ThyTranscludeDirective = __decorate([
        Directive({
            selector: '[thyTransclude]'
        }),
        __metadata("design:paramtypes", [ViewContainerRef])
    ], ThyTranscludeDirective);
    return ThyTranscludeDirective;
}());
export { ThyTranscludeDirective };
//# sourceMappingURL=ng-transclude.directive.js.map