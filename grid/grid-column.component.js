var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, Input, ElementRef, ViewEncapsulation, ContentChild, TemplateRef, InjectionToken, Optional, Inject } from '@angular/core';
/**
 * Injection token used to provide the parent component to options.
 */
export var THY_GRID_COLUMN_PARENT_COMPONENT = new InjectionToken('THY_GRID_COLUMN_PARENT_COMPONENT');
var ThyGridColumnComponent = /** @class */ (function () {
    function ThyGridColumnComponent(el, parent) {
        this.el = el;
        this.parent = parent;
        this.thyModelKey = '';
        this.thyTitle = '';
        this.thyType = '';
        this.thyWidth = '';
        this.thyClassName = '';
        this.thyHeaderClassName = '';
        this.thyDisabled = false;
        this.thyDefaultText = '';
        this.selections = [];
        this._firstChange = true;
    }
    Object.defineProperty(ThyGridColumnComponent.prototype, "thySelections", {
        set: function (value) {
            if (value) {
                if (Array.isArray(value)) {
                    this.selections = value;
                }
                else {
                    this.selections = [value];
                }
                if (!this._firstChange) {
                    this.parent.updateColumnSelections(this.key, this.selections);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridColumnComponent.prototype, "templateRef", {
        set: function (value) {
            if (value) {
                if (!this.headerTemplateRef && !this.cellTemplateRef) {
                    this.cellTemplateRef = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyGridColumnComponent.prototype.ngOnInit = function () {
        this.key = this._generateKey();
        this.model = this.thyModelKey;
        this.title = this.thyTitle;
        this.type = this.thyType;
        this.width = this.thyWidth;
        this.className = this.thyClassName;
        this.headerClassName = this.thyHeaderClassName;
        this.disabled = this.thyDisabled;
        this.defaultText = this.thyDefaultText;
        this._firstChange = false;
    };
    ThyGridColumnComponent.prototype._generateKey = function () {
        return ('[$$column]' +
            Math.random()
                .toString(16)
                .substr(2, 8));
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyModelKey", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyWidth", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyClassName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyHeaderClassName", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyDisabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridColumnComponent.prototype, "thySelections", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyGridColumnComponent.prototype, "thyDefaultText", void 0);
    __decorate([
        ContentChild('header'),
        __metadata("design:type", TemplateRef)
    ], ThyGridColumnComponent.prototype, "headerTemplateRef", void 0);
    __decorate([
        ContentChild('cell'),
        __metadata("design:type", TemplateRef)
    ], ThyGridColumnComponent.prototype, "cellTemplateRef", void 0);
    __decorate([
        ContentChild(TemplateRef),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], ThyGridColumnComponent.prototype, "templateRef", null);
    ThyGridColumnComponent = __decorate([
        Component({
            selector: 'thy-grid-column',
            template: '<ng-content></ng-content>',
            encapsulation: ViewEncapsulation.None
        }),
        __param(1, Optional()),
        __param(1, Inject(THY_GRID_COLUMN_PARENT_COMPONENT)),
        __metadata("design:paramtypes", [ElementRef, Object])
    ], ThyGridColumnComponent);
    return ThyGridColumnComponent;
}());
export { ThyGridColumnComponent };
//# sourceMappingURL=grid-column.component.js.map