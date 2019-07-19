var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChildren, ContentChildren, QueryList, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { ThyStepComponent, THY_STEPPER_COMPONENT } from './step.component';
import { ThyStepHeaderComponent } from './step-header.component';
var ThyStepperComponent = /** @class */ (function () {
    function ThyStepperComponent() {
        this.thyShowStepHeader = true;
        this._selectedIndex = 0;
        this.selectionChange = new EventEmitter();
        this.thyStepper = true;
    }
    ThyStepperComponent_1 = ThyStepperComponent;
    Object.defineProperty(ThyStepperComponent.prototype, "thySelectedIndex", {
        set: function (value) {
            this.selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStepperComponent.prototype, "thySelected", {
        set: function (value) {
            this.selected = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStepperComponent.prototype, "selected", {
        get: function () {
            return this.steps ? this.steps.toArray()[this.selectedIndex] : null;
        },
        set: function (step) {
            this.selectedIndex = this.steps ? this.steps.toArray().indexOf(step) : -1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyStepperComponent.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (index) {
            if (this.steps) {
                this._updateSelectedItemIndex(index);
            }
            else {
                this._selectedIndex = index;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyStepperComponent.prototype._updateSelectedItemIndex = function (newIndex) {
        var stepsArray = this.steps.toArray();
        this.selectionChange.emit({
            selectedIndex: newIndex,
            previouslySelectedIndex: this._selectedIndex,
            selectedStep: stepsArray[newIndex],
            previouslySelectedStep: stepsArray[this._selectedIndex]
        });
        this._selectedIndex = newIndex;
    };
    ThyStepperComponent.prototype.to = function (index) {
        this.selectedIndex = Math.min(index, this.steps.length - 1);
    };
    ThyStepperComponent.prototype.next = function () {
        this.selectedIndex = Math.min(this._selectedIndex + 1, this.steps.length - 1);
    };
    /** Selects and focuses the previous step in list. */
    ThyStepperComponent.prototype.previous = function () {
        this.selectedIndex = Math.max(this._selectedIndex - 1, 0);
    };
    var ThyStepperComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyStepperComponent.prototype, "thySelectedIndex", null);
    __decorate([
        Input(),
        __metadata("design:type", ThyStepComponent),
        __metadata("design:paramtypes", [ThyStepComponent])
    ], ThyStepperComponent.prototype, "thySelected", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyStepperComponent.prototype, "thyShowStepHeader", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyStepperComponent.prototype, "selectionChange", void 0);
    __decorate([
        ViewChildren(ThyStepHeaderComponent),
        __metadata("design:type", QueryList)
    ], ThyStepperComponent.prototype, "stepHeaders", void 0);
    __decorate([
        ContentChildren(ThyStepComponent),
        __metadata("design:type", QueryList)
    ], ThyStepperComponent.prototype, "steps", void 0);
    __decorate([
        HostBinding('class.thy-stepper'),
        __metadata("design:type", Object)
    ], ThyStepperComponent.prototype, "thyStepper", void 0);
    ThyStepperComponent = ThyStepperComponent_1 = __decorate([
        Component({
            selector: 'thy-stepper',
            template: "<div *ngIf=\"thyShowStepHeader\" class=\"thy-stepper-header-container\"> <ng-container *ngFor=\"let step of steps; let i = index; let isLast = last\"> <thy-step-header [index]=\"i\" [label]=\"step.label\" [selected]=\"selectedIndex === i\" [class.thy-stepper-header-active]=\"i <= selectedIndex\" [active]=\"i <= selectedIndex\" > </thy-step-header> <div *ngIf=\"!isLast\" class=\"thy-stepper-line\" [class.thy-stepper-line-active]=\"i < selectedIndex\"></div> </ng-container> </div> <div class=\"thy-stepper-content-container\"> <ng-container [ngTemplateOutlet]=\"selected?.content\"></ng-container> </div> ",
            providers: [
                {
                    provide: THY_STEPPER_COMPONENT,
                    useExisting: ThyStepperComponent_1
                }
            ]
        })
    ], ThyStepperComponent);
    return ThyStepperComponent;
}());
export { ThyStepperComponent };
//# sourceMappingURL=stepper.component.js.map