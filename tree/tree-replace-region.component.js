var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewEncapsulation, ViewContainerRef, Input } from '@angular/core';
import { ThyTreeComponent } from './tree.component';
var ThyTreeReplaceRegionComponent = /** @class */ (function () {
    function ThyTreeReplaceRegionComponent(root, viewRef) {
        this.root = root;
        this.viewRef = viewRef;
    }
    ThyTreeReplaceRegionComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyTreeReplaceRegionComponent.prototype, "thyInstance", void 0);
    ThyTreeReplaceRegionComponent = __decorate([
        Component({
            selector: '[ThyTreeReplaceRegion]',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [ThyTreeComponent,
            ViewContainerRef])
    ], ThyTreeReplaceRegionComponent);
    return ThyTreeReplaceRegionComponent;
}());
export { ThyTreeReplaceRegionComponent };
//# sourceMappingURL=tree-replace-region.component.js.map