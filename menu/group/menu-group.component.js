var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ThyPopBoxService } from '../../pop-box';
import { trigger, state, style, transition, animate } from '@angular/animations';
var ThyMenuGroupComponent = /** @class */ (function () {
    function ThyMenuGroupComponent(popBoxService) {
        this.popBoxService = popBoxService;
        this.rightIconClass = 'wtf wtf-more-lg';
        this.iconClass = 'wtf wtf-drive-o';
        this.groupHeaderPaddingLeft = 0;
        this.isThyMenuGroup = true;
        this.showIcon = false;
        this.isCollapsed = true;
        this.thyTitle = '';
        this.thyShowAction = false;
        this.thyActionStopPropagation = true;
        this.thyOnActionClick = new EventEmitter();
    }
    Object.defineProperty(ThyMenuGroupComponent.prototype, "thyExpand", {
        set: function (value) {
            this.isCollapsed = !!!value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyMenuGroupComponent.prototype, "thyShowIcon", {
        set: function (value) {
            this.showIcon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyMenuGroupComponent.prototype, "thyIcon", {
        set: function (value) {
            this.iconClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyMenuGroupComponent.prototype, "thyActionIcon", {
        set: function (value) {
            this.rightIconClass = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyMenuGroupComponent.prototype, "thyActionMenu", {
        set: function (value) {
            this._actionMenu = value;
        },
        enumerable: true,
        configurable: true
    });
    ThyMenuGroupComponent.prototype.ngOnInit = function () { };
    ThyMenuGroupComponent.prototype.collapseGroup = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    ThyMenuGroupComponent.prototype.onActionClick = function (event) {
        if (this.thyActionStopPropagation) {
            event.stopPropagation();
        }
        if (this._actionMenu) {
            this.popBoxService.show(this._actionMenu, {
                target: event.currentTarget,
                insideAutoClose: true,
                stopPropagation: true,
                placement: 'bottom right'
            });
        }
        else {
            this.thyOnActionClick.emit(event);
        }
    };
    __decorate([
        ViewChild('thyMenuGroup'),
        __metadata("design:type", ElementRef)
    ], ThyMenuGroupComponent.prototype, "_thyMenuGroup", void 0);
    __decorate([
        HostBinding('class.thy-menu-group'),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "isThyMenuGroup", void 0);
    __decorate([
        HostBinding('class.has-icon'),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "showIcon", void 0);
    __decorate([
        HostBinding('class.collapsed'),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "isCollapsed", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "thyTitle", void 0);
    __decorate([
        Input('thyExpand'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyMenuGroupComponent.prototype, "thyExpand", null);
    __decorate([
        Input('thyShowIcon'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyMenuGroupComponent.prototype, "thyShowIcon", null);
    __decorate([
        Input('thyIcon'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMenuGroupComponent.prototype, "thyIcon", null);
    __decorate([
        Input('thyActionIcon'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMenuGroupComponent.prototype, "thyActionIcon", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "thyShowAction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyMenuGroupComponent.prototype, "thyActionStopPropagation", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyMenuGroupComponent.prototype, "thyOnActionClick", void 0);
    __decorate([
        Input(),
        __metadata("design:type", ElementRef),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyMenuGroupComponent.prototype, "thyActionMenu", null);
    ThyMenuGroupComponent = __decorate([
        Component({
            selector: 'thy-menu-group, [thy-menu-group],[thyMenuGroup]',
            template: "<div class=\"thy-menu-group-header\" (click)=\"collapseGroup()\"> <i class=\"wtf wtf-caret-down thy-menu-group-arrow\"></i> <i *ngIf=\"showIcon\" class=\"thy-menu-group-folder\" [ngClass]=\"iconClass\"></i> <span class=\"thy-menu-group-title\" [title]=\"thyTitle\">{{ thyTitle }}</span> <i *ngIf=\"thyShowAction\" class=\"thy-menu-group-more\" [ngClass]=\"rightIconClass\" (click)=\"onActionClick($event)\"></i> </div> <div class=\"thy-menu-group-body\" #thyMenuGroup [@detailsContentAnimation]=\"isCollapsed\"> <ng-content></ng-content> </div> ",
            animations: [
                trigger('detailsContentAnimation', [
                    state('void', style({
                        height: '*'
                    })),
                    state('1', style({
                        height: 0,
                        overflow: 'hidden'
                    })),
                    state('0', style({
                        height: '*'
                    })),
                    transition('* => *', animate('0ms ease-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [ThyPopBoxService])
    ], ThyMenuGroupComponent);
    return ThyMenuGroupComponent;
}());
export { ThyMenuGroupComponent };
//# sourceMappingURL=menu-group.component.js.map