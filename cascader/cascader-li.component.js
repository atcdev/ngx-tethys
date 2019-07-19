var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, HostBinding, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { UpdateHostClassService } from '../shared/update-host-class.service';
var ThyCascaderOptionComponent = /** @class */ (function () {
    function ThyCascaderOptionComponent() {
        this.item = true;
        this.active = false;
    }
    Object.defineProperty(ThyCascaderOptionComponent.prototype, "disabled", {
        get: function () {
            return this.option.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderOptionComponent.prototype, "expand", {
        get: function () {
            return this.option && !this.option.isLeaf;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderOptionComponent.prototype.getOptionLabel = function () {
        return this.option ? this.option[this.thyLabelProperty || 'label'] : '';
    };
    ThyCascaderOptionComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderOptionComponent.prototype, "option", void 0);
    __decorate([
        HostBinding('class.thy-cascader-menu-item'),
        __metadata("design:type", Object)
    ], ThyCascaderOptionComponent.prototype, "item", void 0);
    __decorate([
        HostBinding('class.thy-cascader-menu-item-active'),
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderOptionComponent.prototype, "active", void 0);
    __decorate([
        HostBinding('class.thy-cascader-menu-item-disabled'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ThyCascaderOptionComponent.prototype, "disabled", null);
    __decorate([
        HostBinding('class.thy-cascader-menu-item-expand'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], ThyCascaderOptionComponent.prototype, "expand", null);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyCascaderOptionComponent.prototype, "thyLabelProperty", void 0);
    ThyCascaderOptionComponent = __decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            encapsulation: ViewEncapsulation.None,
            selector: '[thy-cascader-option]',
            template: "<ng-container> {{ getOptionLabel() }} </ng-container> <span *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\" class=\"wtf wtf-angle-right thy-cascader-menu-item-expand-icon\"> </span>",
            providers: [UpdateHostClassService]
        }),
        __metadata("design:paramtypes", [])
    ], ThyCascaderOptionComponent);
    return ThyCascaderOptionComponent;
}());
export { ThyCascaderOptionComponent };
//# sourceMappingURL=cascader-li.component.js.map