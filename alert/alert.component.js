var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { helpers } from '../util';
var ThyAlertComponent = /** @class */ (function () {
    function ThyAlertComponent() {
        this.thyType = 'info';
        // @ViewChild(TemplateRef) content: TemplateRef<any>;
        this._typeIcon = {
            success: 'wtf-completed-circle',
            warning: 'wtf-unselected-o',
            danger: 'wtf-times-circle',
            info: 'wtf-task',
        };
        this._showIcon = true;
    }
    Object.defineProperty(ThyAlertComponent.prototype, "thyIcon", {
        get: function () {
            if (this._showIcon) {
                return this._icon || this._typeIcon[this.thyType];
            }
            else {
                return null;
            }
        },
        set: function (value) {
            if (value) {
                this._showIcon = true;
                this._icon = helpers.isString(value) ? value.toString() : null;
            }
            else {
                this._showIcon = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyAlertComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyAlertComponent.prototype, "thyType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThyAlertComponent.prototype, "thyMessage", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyAlertComponent.prototype, "thyIcon", null);
    ThyAlertComponent = __decorate([
        Component({
            selector: 'thy-alert',
            template: "<!-- <ng-template><ng-content></ng-content></ng-template> --> <div class=\"thy-alert thy-alert-{{thyType}}\"> <span *ngIf=\"thyIcon\" class=\"wtf mr-2\" [ngClass]=\"thyIcon\"></span> <span *ngIf=\"thyMessage\">{{thyMessage}}</span> <!-- <ng-container [ngTemplateOutlet]=\"content\"></ng-container> --> </div>"
        }),
        __metadata("design:paramtypes", [])
    ], ThyAlertComponent);
    return ThyAlertComponent;
}());
export { ThyAlertComponent };
//# sourceMappingURL=alert.component.js.map