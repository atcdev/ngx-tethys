var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostBinding, ViewChild, InjectionToken, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ThyDatepickerNextTimeSimplyComponent } from './time-simply.component';
import { ThyDatepickerNextStore, datepickerNextActions } from '../datepicker-next.store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { getFullTimeText } from '../util';
import { ThyDatepickerNextTimeAccurateComponent } from './time-accurate.component';
import { DatepickerNextTimeModeType } from '../datepicker-next.interface';
export var CONTAINER_DATA = new InjectionToken('CONTAINER_DATA');
var ThyDatepickerNextTimeComponent = /** @class */ (function () {
    function ThyDatepickerNextTimeComponent(injector, overlay, store) {
        this.injector = injector;
        this.overlay = overlay;
        this.store = store;
        this.stylesClass = 'time-container';
        this.isEdit = false;
        this._timeOverlayComponent = ThyDatepickerNextTimeSimplyComponent;
        this.ngUnsubscribe$ = new Subject();
    }
    ThyDatepickerNextTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.store.snapshot.viewFeatureConfig.timeComponentType ===
            DatepickerNextTimeModeType.accurate) {
            this._timeOverlayComponent = ThyDatepickerNextTimeAccurateComponent;
        }
        this.store
            .select(ThyDatepickerNextStore.timeSelected)
            .pipe(takeUntil(this.ngUnsubscribe$))
            .subscribe(function (n) {
            _this._combinationTimeText();
            _this._detachTimePop();
            if (_this.store.snapshot.timeSelected) {
                _this.behaviorEdit();
            }
        });
    };
    ThyDatepickerNextTimeComponent.prototype._combinationTimeText = function () {
        var time = this.store.snapshot.timeSelected;
        if (time) {
            this.timeText = getFullTimeText(time.hour) + ":" + getFullTimeText(time.minute);
        }
    };
    ThyDatepickerNextTimeComponent.prototype.behaviorEdit = function () {
        this.isEdit = true;
    };
    ThyDatepickerNextTimeComponent.prototype.behaviorPopTimeSelect = function () {
        this._combinationOverlayRef();
        if (!this._detachTimePop()) {
            this.overlayRef.attach(new ComponentPortal(this._timeOverlayComponent, null, this.createInjector({
                store: this.store
            })));
        }
    };
    ThyDatepickerNextTimeComponent.prototype.createInjector = function (dataToPass) {
        var injectorTokens = new WeakMap();
        injectorTokens.set(CONTAINER_DATA, dataToPass);
        return new PortalInjector(this.injector, injectorTokens);
    };
    ThyDatepickerNextTimeComponent.prototype._combinationOverlayRef = function () {
        if (this.overlayRef) {
            return;
        }
        var strategy = this.overlay
            .position()
            .connectedTo(this.timeInput, { originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' });
        this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
    };
    ThyDatepickerNextTimeComponent.prototype._detachTimePop = function () {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            return true;
        }
    };
    ThyDatepickerNextTimeComponent.prototype.onTimeChange = function () {
        var time = this.timeText.trim();
        var reg = /^[0-9]{2}:[0-9]{2}$/;
        if (reg.test(time)) {
            var timeArray = time.split(':');
            this.store.dispatch(datepickerNextActions.changeTimeSelected, {
                hour: timeArray[0] * 1,
                minute: timeArray[1] * 1
            });
        }
        else if (time === '') {
            this.store.dispatch(datepickerNextActions.changeTimeSelected);
        }
    };
    ThyDatepickerNextTimeComponent.prototype.ngOnDestroy = function () {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
    };
    __decorate([
        HostBinding('class'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextTimeComponent.prototype, "stylesClass", void 0);
    __decorate([
        ViewChild('timeInput'),
        __metadata("design:type", Object)
    ], ThyDatepickerNextTimeComponent.prototype, "timeInput", void 0);
    ThyDatepickerNextTimeComponent = __decorate([
        Component({
            selector: 'thy-datepicker-next-time',
            template: "<div class=\"time-text\" *ngIf=\"!isEdit\" (click)=\"behaviorEdit()\"> <ng-container><i class=\"wtf wtf-timeline-o\"></i> 设置时间</ng-container> </div> <div *ngIf=\"isEdit\" #timeInput (click)=\"behaviorPopTimeSelect()\"> <input thyInput thySize=\"md\" name=\"time\" thyAutofocus [(ngModel)]=\"timeText\" (ngModelChange)=\"onTimeChange()\" placeholder=\"\"> </div> "
        }),
        __metadata("design:paramtypes", [Injector,
            Overlay,
            ThyDatepickerNextStore])
    ], ThyDatepickerNextTimeComponent);
    return ThyDatepickerNextTimeComponent;
}());
export { ThyDatepickerNextTimeComponent };
//# sourceMappingURL=time.component.js.map