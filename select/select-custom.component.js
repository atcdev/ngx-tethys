var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, HostBinding, Input, ElementRef, ContentChildren, QueryList, Output, EventEmitter, TemplateRef, ContentChild, ViewChild, Renderer2, ChangeDetectorRef, NgZone, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { UpdateHostClassService } from '../shared/update-host-class.service';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyOptionComponent, THY_SELECT_OPTION_PARENT_COMPONENT } from './option.component';
import { inputValueToBoolean, isArray } from '../util/helpers';
import { Overlay, ViewportRuler } from '@angular/cdk/overlay';
import { takeUntil, startWith, take, switchMap } from 'rxjs/operators';
import { Subject, merge, defer } from 'rxjs';
import { EXPANDED_DROPDOWN_POSITIONS } from '../core/overlay/overlay-opsition-map';
import { ThySelectOptionGroupComponent } from './option-group.component';
import { SelectionModel } from '@angular/cdk/collections';
var noop = function () { };
var ɵ0 = noop;
var ThySelectCustomComponent = /** @class */ (function () {
    function ThySelectCustomComponent(_ngZone, elementRef, updateHostClassService, renderer, overlay, viewportRuler, changeDetectorRef) {
        var _this = this;
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.overlay = overlay;
        this.viewportRuler = viewportRuler;
        this.changeDetectorRef = changeDetectorRef;
        this._disabled = false;
        this._classNames = [];
        this._viewContentInitialized = false;
        this._loadingDone = true;
        this.dropDownPosition = 'bottom';
        this.positions = EXPANDED_DROPDOWN_POSITIONS;
        /** Emits whenever the component is destroyed. */
        this._destroy$ = new Subject();
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        this._isSelectCustom = true;
        this._isSelect = true;
        this._panelOpen = false;
        this.thyOnSearch = new EventEmitter();
        this.thyAllowClear = false;
        this.optionSelectionChanges = defer(function () {
            if (_this.options) {
                return merge.apply(void 0, _this.options.map(function (option) { return option.selectionChange; }));
            }
            return _this._ngZone.onStable.asObservable().pipe(take(1), switchMap(function () { return _this.optionSelectionChanges; }));
        });
        this.updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    ThySelectCustomComponent_1 = ThySelectCustomComponent;
    Object.defineProperty(ThySelectCustomComponent.prototype, "panelOpen", {
        // 下拉选项是否展示
        get: function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "thyMode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "thySize", {
        set: function (value) {
            this._size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "thyEmptyStateText", {
        set: function (value) {
            this._emptyStateText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "thyLoadingDone", {
        set: function (value) {
            this._loadingDone = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "thyDisabled", {
        set: function (value) {
            this._disabled = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "empty", {
        /** Whether the select has a value. */
        get: function () {
            return !this._selectionModel || this._selectionModel.isEmpty();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "selected", {
        /** The currently selected option. */
        get: function () {
            return this.thyMode === 'multiple' ? this._selectionModel.selected : this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "firstSelected", {
        /** The currently selected option. */
        get: function () {
            return this._selectionModel.selected[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThySelectCustomComponent.prototype, "selectedDisplayContext", {
        get: function () {
            var selectedValues = this._selectionModel.selected;
            if (selectedValues.length === 0) {
                return null;
            }
            var context = selectedValues.map(function (option) {
                return option.thyRawValue || option.thyValue;
            });
            if (this.thyMode === 'multiple') {
                return {
                    $implicit: context
                };
            }
            else {
                return {
                    $implicit: context[0]
                };
            }
        },
        enumerable: true,
        configurable: true
    });
    ThySelectCustomComponent.prototype.trggleHover = function ($event) {
        console.log('mouseover');
        if (this.thyHoverTriggerAction) {
            this.open();
        }
    };
    ThySelectCustomComponent.prototype.onSelectContainerMouseleave = function (event) {
        console.log('leave');
        if (event) {
            event.preventDefault();
        }
        if (!this.thyHoverTriggerAction) {
            return;
        }
        this.close();
    };
    ThySelectCustomComponent.prototype.writeValue = function (value) {
        this._modalValue = value;
        if (this.options && this.options.length > 0) {
            this._setSelecttionByModelValue(this._modalValue);
        }
    };
    ThySelectCustomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._scrollStrategy = this.overlay.scrollStrategies.reposition();
        this.viewportRuler
            .change()
            .pipe(takeUntil(this._destroy$))
            .subscribe(function () {
            if (_this._panelOpen) {
                _this.triggerRect = _this.trigger.nativeElement.getBoundingClientRect();
                _this.changeDetectorRef.markForCheck();
            }
        });
        this._instanceSelectionModel();
        if (this._size) {
            this._classNames.push("thy-select-" + this._size);
        }
        if (this._mode === 'multiple') {
            this._classNames.push("thy-select-custom--multiple");
        }
        this.updateHostClassService.updateClass(this._classNames);
    };
    ThySelectCustomComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._selectionModel.onChange.pipe(takeUntil(this._destroy$)).subscribe(function (event) {
            event.added.forEach(function (option) { return option.select(); });
            event.removed.forEach(function (option) { return option.deselect(); });
        });
        this.options.changes
            .pipe(startWith(null), takeUntil(this._destroy$))
            .subscribe(function () {
            _this._resetOptions();
            _this._initializeSelection();
        });
    };
    ThySelectCustomComponent.prototype._resetOptions = function () {
        var _this = this;
        var changedOrDestroyed$ = merge(this.options.changes, this._destroy$);
        this.optionSelectionChanges.pipe(takeUntil(changedOrDestroyed$)).subscribe(function (event) {
            _this._onSelect(event.option);
            if (_this.thyMode !== 'multiple' && _this._panelOpen) {
                _this.close();
            }
        });
    };
    ThySelectCustomComponent.prototype._initializeSelection = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this._setSelecttionByModelValue(_this._modalValue);
        });
    };
    ThySelectCustomComponent.prototype._setSelecttionByModelValue = function (modalValue) {
        var _this = this;
        this._selectionModel.clear();
        if (!modalValue) {
            this.changeDetectorRef.markForCheck();
            return;
        }
        if (this._mode === 'multiple') {
            if (isArray(modalValue)) {
                this.options.forEach(function (option) {
                    var index = modalValue.findIndex(function (itemValue) {
                        return itemValue === option.thyValue;
                    });
                    if (index >= 0) {
                        _this._selectionModel.select(option);
                    }
                });
            }
        }
        else {
            var selectedOption = this.options.find(function (option) {
                return option.thyValue === modalValue;
            });
            if (selectedOption) {
                this._selectionModel.select(selectedOption);
            }
        }
        this.changeDetectorRef.markForCheck();
    };
    ThySelectCustomComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ThySelectCustomComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    ThySelectCustomComponent.prototype._emitModelValueChange = function () {
        var selectedValues = this._selectionModel.selected;
        var changeValue = selectedValues.map(function (option) {
            return option.thyValue;
        });
        if (this._mode === 'multiple') {
            this._modalValue = changeValue;
        }
        else {
            if (changeValue.length === 0) {
                this._modalValue = null;
            }
            else {
                this._modalValue = changeValue[0];
            }
        }
        this.onChangeCallback(this._modalValue);
    };
    ThySelectCustomComponent.prototype.remove = function (item, event) {
        if (event) {
            event.stopPropagation();
        }
        if (this._disabled) {
            return;
        }
        item.deselect();
    };
    ThySelectCustomComponent.prototype.clearSelectValue = function (event) {
        if (event) {
            event.stopPropagation();
        }
        if (this._disabled) {
            return;
        }
        this._selectionModel.clear();
        this.changeDetectorRef.markForCheck();
        this._emitModelValueChange();
    };
    ThySelectCustomComponent.prototype.toggle = function () {
        this._panelOpen ? this.close() : this.open();
    };
    ThySelectCustomComponent.prototype.open = function () {
        if (this._disabled || !this.options || !this.options.length || this._panelOpen) {
            return;
        }
        this.triggerRect = this.trigger.nativeElement.getBoundingClientRect();
        this._panelOpen = true;
    };
    ThySelectCustomComponent.prototype.close = function () {
        if (this._panelOpen) {
            this._panelOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    ThySelectCustomComponent.prototype.onSearchFilter = function () {
        var _this = this;
        if (this.thyServerSearch) {
            this.thyOnSearch.emit(this.searchText);
        }
        else {
            this.options.forEach(function (option) {
                if (option.matchSearchText(_this.searchText)) {
                    option.showOption();
                }
                else {
                    option.hideOption();
                }
            });
        }
    };
    ThySelectCustomComponent.prototype._instanceSelectionModel = function () {
        this._selectionModel = new SelectionModel(this._mode === 'multiple');
    };
    ThySelectCustomComponent.prototype._onSelect = function (option, event) {
        var wasSelected = this._selectionModel.isSelected(option);
        if (option.thyValue == null && this.thyMode !== 'multiple') {
            option.deselect();
            this._selectionModel.clear();
        }
        else {
            option.selected ? this._selectionModel.select(option) : this._selectionModel.deselect(option);
        }
        if (wasSelected !== this._selectionModel.isSelected(option)) {
            this._emitModelValueChange();
        }
        this.changeDetectorRef.markForCheck();
    };
    ThySelectCustomComponent.prototype.ngOnDestroy = function () {
        this._destroy$.next();
        this._destroy$.complete();
    };
    var ThySelectCustomComponent_1;
    __decorate([
        HostBinding('class.thy-select-custom'),
        __metadata("design:type", Object)
    ], ThySelectCustomComponent.prototype, "_isSelectCustom", void 0);
    __decorate([
        HostBinding('class.thy-select'),
        __metadata("design:type", Object)
    ], ThySelectCustomComponent.prototype, "_isSelect", void 0);
    __decorate([
        HostBinding('class.menu-is-opened'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], ThySelectCustomComponent.prototype, "panelOpen", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThySelectCustomComponent.prototype, "thyOnSearch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThySelectCustomComponent.prototype, "thyShowSearch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ThySelectCustomComponent.prototype, "thyPlaceHolder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThySelectCustomComponent.prototype, "thyServerSearch", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ThySelectCustomComponent.prototype, "thyHoverTriggerAction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySelectCustomComponent.prototype, "thyMode", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySelectCustomComponent.prototype, "thySize", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySelectCustomComponent.prototype, "thyEmptyStateText", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThySelectCustomComponent.prototype, "thyAllowClear", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThySelectCustomComponent.prototype, "thyLoadingDone", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThySelectCustomComponent.prototype, "thyDisabled", null);
    __decorate([
        ContentChild('selectedDisplay'),
        __metadata("design:type", TemplateRef)
    ], ThySelectCustomComponent.prototype, "selectedValueDisplayRef", void 0);
    __decorate([
        ViewChild('trigger'),
        __metadata("design:type", ElementRef)
    ], ThySelectCustomComponent.prototype, "trigger", void 0);
    __decorate([
        ContentChildren(ThyOptionComponent, { descendants: true }),
        __metadata("design:type", QueryList)
    ], ThySelectCustomComponent.prototype, "options", void 0);
    __decorate([
        ContentChildren(ThySelectOptionGroupComponent),
        __metadata("design:type", QueryList)
    ], ThySelectCustomComponent.prototype, "optionGroups", void 0);
    __decorate([
        HostListener('mouseover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThySelectCustomComponent.prototype, "trggleHover", null);
    ThySelectCustomComponent = ThySelectCustomComponent_1 = __decorate([
        Component({
            selector: 'thy-custom-select',
            template: "<div cdk-overlay-origin (click)=\"toggle()\" #origin=\"cdkOverlayOrigin\" #trigger class=\"form-control form-control-custom\" [class.disabled]=\"_disabled\" [class.thy-select-selection]=\"!thyMode\" [ngClass]=\"_size ? 'form-control-' + _size : ''\" > <ng-container [ngSwitch]=\"empty\"> <span class=\"text-placeholder d-inline-block\" *ngSwitchCase=\"true\"> {{ thyPlaceHolder }} </span> <ng-container *ngSwitchCase=\"false\" [ngSwitch]=\"!!selectedValueDisplayRef\"> <ng-container *ngSwitchCase=\"true\"> <ng-container *ngTemplateOutlet=\"selectedValueDisplayRef; context: selectedDisplayContext\"></ng-container> </ng-container> <ng-container *ngSwitchDefault [ngSwitch]=\"thyMode\"> <ng-container *ngSwitchCase=\"'multiple'\"> <span class=\"mr-1\" *ngFor=\"let item of selected; index as i\" thyLabel=\"default\" thyAfterIcon=\"wtf-times\" (click)=\"remove(item, $event)\" > {{ item.thyLabelText }} </span> </ng-container> <ng-container *ngSwitchDefault> <span>{{ firstSelected.thyLabelText }}</span> </ng-container> </ng-container> <a class=\"thy-select-remove remove-link\" href=\"javascript:;\" (click)=\"clearSelectValue($event)\" *ngIf=\"thyAllowClear\" > <i class=\"wtf wtf-times-circle\"></i> </a> </ng-container> </ng-container> </div> <ng-template cdk-connected-overlay cdkConnectedOverlayLockPosition cdkConnectedOverlayHasBackdrop [cdkConnectedOverlayPositions]=\"positions\" cdkConnectedOverlayBackdropClass=\"cdk-overlay-transparent-backdrop\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayOpen]=\"panelOpen\" [cdkConnectedOverlayWidth]=\"triggerRect?.width\" (backdropClick)=\"close()\" (detach)=\"close()\" > <div class=\"thy-select-container\" (mouseleave)=\"onSelectContainerMouseleave($event)\"> <div class=\"trgger-top-leave-block\"></div> <div class=\"trgger-bottom-leave-block\"></div> <div class=\"thy-select-search\" *ngIf=\"thyShowSearch\"> <thy-input-search thyAutofocus name=\"search\" [(ngModel)]=\"searchText\" (ngModelChange)=\"onSearchFilter()\" ></thy-input-search> </div> <ng-container *ngIf=\"options.length > 0 || optionGroups.length > 0; else emptyPlaceholder\"> <div class=\"thy-select-custom-options\"> <ng-content></ng-content> </div> </ng-container> <ng-template #emptyPlaceholder> <div class=\"pl-4 pt-1 pb-1 text-placeholder\">{{ _emptyStateText }}</div> </ng-template> </div> </ng-template> ",
            exportAs: 'thyCustomSelect',
            providers: [
                {
                    provide: THY_SELECT_OPTION_PARENT_COMPONENT,
                    useExisting: ThySelectCustomComponent_1
                },
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThySelectCustomComponent_1; }),
                    multi: true
                },
                UpdateHostClassService
            ],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [NgZone,
            ElementRef,
            UpdateHostClassService,
            Renderer2,
            Overlay,
            ViewportRuler,
            ChangeDetectorRef])
    ], ThySelectCustomComponent);
    return ThySelectCustomComponent;
}());
export { ThySelectCustomComponent };
export { ɵ0 };
//# sourceMappingURL=select-custom.component.js.map