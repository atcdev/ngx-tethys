var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, forwardRef, ChangeDetectorRef, Input, Output, EventEmitter, TemplateRef, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { EXPANDED_DROPDOWN_POSITIONS } from '../core/overlay/overlay-opsition-map';
import { UpdateHostClassService } from '../shared/update-host-class.service';
import { inputValueToBoolean } from '../util/helpers';
function toArray(value) {
    var ret;
    if (value == null) {
        ret = [];
    }
    else if (!Array.isArray(value)) {
        ret = [value];
    }
    else {
        ret = value;
    }
    return ret;
}
function arrayEquals(array1, array2) {
    if (!array1 || !array2 || array1.length !== array2.length) {
        return false;
    }
    var len = array1.length;
    for (var i = 0; i < len; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
var defaultDisplayRender = function (label) { return label.join(' / '); };
var ɵ0 = defaultDisplayRender;
var ThyCascaderComponent = /** @class */ (function () {
    function ThyCascaderComponent(cdr, elementRef, updateHostClassService) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.updateHostClassService = updateHostClassService;
        this.changeOnSelect = false;
        this.showInput = true;
        this.prefixCls = 'thy-cascader';
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.isOpening = false;
        this.showSearch = false;
        this._thySize = 'md';
        this.isLabelRenderTemplate = false;
        this.labelRenderContext = {};
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.cascaderPositon = EXPANDED_DROPDOWN_POSITIONS.slice();
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.thyColumns = [];
        this.thyValueProperty = 'value';
        this.thyLabelProperty = 'label';
        this.thyPlaceHolder = '请选择';
        this._inputValue = '';
        this.inSearch = false;
        this.thyTriggerAction = ['click'];
        this.thyExpandTriggerAction = ['click'];
        this.disabled = false;
        this.thyChange = new EventEmitter();
        this.thySelectionChange = new EventEmitter();
        this.thySelect = new EventEmitter();
        this.thyClear = new EventEmitter();
        updateHostClassService.initializeElement(elementRef.nativeElement);
    }
    ThyCascaderComponent_1 = ThyCascaderComponent;
    Object.defineProperty(ThyCascaderComponent.prototype, "thyLabelRender", {
        get: function () {
            return this.labelRenderTpl;
        },
        set: function (value) {
            this.labelRenderTpl = value;
            this.isLabelRenderTemplate = value instanceof TemplateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "inputValue", {
        get: function () {
            return this._inputValue;
        },
        set: function (inputValue) {
            this._inputValue = inputValue;
            var willBeInSearch = !!inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thyChangeOnSelect", {
        get: function () {
            return this.changeOnSelect;
        },
        set: function (value) {
            this.changeOnSelect = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thyShowInput", {
        get: function () {
            return this.showInput;
        },
        set: function (value) {
            this.showInput = inputValueToBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thyOptions", {
        set: function (options) {
            this.oldColumnsHolder = this.thyColumns =
                options && options.length ? [options] : [];
            if (!this.inSearch) {
                if (this.defaultValue && this.thyColumns.length) {
                    this.initOptions(0);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thyMenuClassName", {
        get: function () {
            return this.menuClassName;
        },
        set: function (value) {
            this.menuClassName = value;
            this.setMenuClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thyColumnClassName", {
        get: function () {
            return this.columnClassName;
        },
        set: function (value) {
            this.columnClassName = value;
            this.setMenuClass();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyCascaderComponent.prototype, "thySize", {
        get: function () {
            return this._thySize;
        },
        set: function (v) {
            this._thySize = v;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.ngOnInit = function () {
        this.setClassMap();
        this.setMenuClass();
        this.setMenuColumnClass();
        this.setArrowClass();
        this.setLabelClass();
        this.setClearClass();
        this.setInputClass();
        this.initPosition();
    };
    ThyCascaderComponent.prototype.initPosition = function () {
        this.cascaderPositon[0].offsetY = 10; // 左下
        this.cascaderPositon[1].offsetY = 10; // 右下
        this.cascaderPositon[2].offsetY = -10; // 右下
        this.cascaderPositon[3].offsetY = -10; // 右下
        this.positions = this.cascaderPositon;
    };
    ThyCascaderComponent.prototype.initOptions = function (index) {
        var _this = this;
        var vs = this.defaultValue;
        var load = function () {
            _this.activateOnInit(index, vs[index]);
            if (index < vs.length - 1) {
                _this.initOptions(index + 1);
            }
            if (index === vs.length - 1) {
                _this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.thyLoadData) {
            load();
        }
        else {
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildren(node, index - 1, load, this.afterWriteValue);
        }
    };
    ThyCascaderComponent.prototype.activateOnInit = function (index, value) {
        var _a;
        var option = this.findOption(value, index);
        if (!option) {
            option =
                typeof value === 'object'
                    ? value
                    : (_a = {},
                        _a["" + (this.thyValueProperty || 'value')] = value,
                        _a["" + (this.thyLabelProperty || 'label')] = value,
                        _a);
        }
        this.setActiveOption(option, index, false, false);
    };
    ThyCascaderComponent.prototype.writeValue = function (value) {
        var vs = (this.defaultValue = toArray(value));
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    ThyCascaderComponent.prototype.afterWriteValue = function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    ThyCascaderComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ThyCascaderComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    ThyCascaderComponent.prototype.onPositionChange = function (position) {
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    ThyCascaderComponent.prototype.isLoaded = function (index) {
        return this.thyColumns[index] && this.thyColumns[index].length > 0;
    };
    ThyCascaderComponent.prototype.getOptionLabel = function (option) {
        return option[this.thyLabelProperty || 'label'];
    };
    ThyCascaderComponent.prototype.getOptionValue = function (option) {
        return option[this.thyValueProperty || 'value'];
    };
    ThyCascaderComponent.prototype.hasInput = function () {
        return this.inputValue.length > 0;
    };
    ThyCascaderComponent.prototype.hasValue = function () {
        return this.value && this.value.length > 0;
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "showPlaceholder", {
        get: function () {
            return !(this.hasInput() || this.hasValue());
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.isActivedOption = function (option, index) {
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    ThyCascaderComponent.prototype.findOption = function (option, index) {
        var _this = this;
        var options = this.thyColumns[index];
        if (options) {
            var value_1 = typeof option === 'object'
                ? this.getOptionValue(option)
                : option;
            return options.find(function (o) { return value_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    ThyCascaderComponent.prototype.buildDisplayLabel = function () {
        var _this = this;
        var selectedOptions = this.selectedOptions;
        var labels = selectedOptions.map(function (o) {
            return _this.getOptionLabel(o);
        });
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
    };
    ThyCascaderComponent.prototype.isMenuVisible = function () {
        return this.menuVisible;
    };
    ThyCascaderComponent.prototype.setMenuVisible = function (menuVisible) {
        if (this.menuVisible !== menuVisible) {
            this.menuVisible = menuVisible;
            this.setClassMap();
            this.setArrowClass();
            this.setMenuClass();
        }
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "menuCls", {
        get: function () {
            return this._menuCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setMenuClass = function () {
        var _a;
        this._menuCls = (_a = {},
            _a[this.prefixCls + "-menus"] = true,
            _a[this.prefixCls + "-menus-hidden"] = !this.menuVisible,
            _a["" + this.thyMenuClassName] = this.thyMenuClassName,
            _a);
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "menuColumnCls", {
        get: function () {
            return this._menuColumnCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setMenuColumnClass = function () {
        var _a;
        this._menuColumnCls = (_a = {},
            _a[this.prefixCls + "-menu"] = true,
            _a["" + this.thyColumnClassName] = this.thyColumnClassName,
            _a);
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "arrowCls", {
        get: function () {
            return this._arrowCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setArrowClass = function () {
        var _a;
        this._arrowCls = (_a = {},
            _a[this.prefixCls + "-picker-arrow"] = true,
            _a[this.prefixCls + "-picker-arrow-expand"] = this.menuVisible,
            _a);
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "clearCls", {
        get: function () {
            return this._clearCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setClearClass = function () {
        var _a;
        this._clearCls = (_a = {},
            _a[this.prefixCls + "-picker-clear"] = true,
            _a);
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "labelCls", {
        get: function () {
            return this._labelCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setLabelClass = function () {
        var _a;
        this._labelCls = (_a = {},
            _a[this.prefixCls + "-picker-label"] = true,
            _a[this.prefixCls + "-show-search"] = false,
            _a[this.prefixCls + "-focused"] = false,
            _a);
    };
    Object.defineProperty(ThyCascaderComponent.prototype, "inputCls", {
        get: function () {
            return this._inputCls;
        },
        enumerable: true,
        configurable: true
    });
    ThyCascaderComponent.prototype.setInputClass = function () {
        var _a;
        this._inputCls = (_a = {},
            _a[this.prefixCls + "-input"] = true,
            _a);
    };
    ThyCascaderComponent.prototype.setClassMap = function () {
        var _a;
        var classMap = (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-picker"] = true,
            _a[this.prefixCls + "-" + this.thySize] = true,
            _a[this.prefixCls + "-picker-disabled"] = this.disabled,
            _a[this.prefixCls + "-picker-open"] = this.menuVisible,
            _a);
        this.updateHostClassService.updateClassByMap(classMap);
    };
    ThyCascaderComponent.prototype.isClickTriggerAction = function () {
        if (typeof this.thyTriggerAction === 'string') {
            return this.thyTriggerAction === 'click';
        }
        return this.thyTriggerAction.indexOf('click') !== -1;
    };
    ThyCascaderComponent.prototype.isHoverTriggerAction = function () {
        if (typeof this.thyTriggerAction === 'string') {
            return this.thyTriggerAction === 'hover';
        }
        return this.thyTriggerAction.indexOf('hover') !== -1;
    };
    ThyCascaderComponent.prototype.isClickExpandTriggerAction = function () {
        if (typeof this.thyExpandTriggerAction === 'string') {
            return this.thyExpandTriggerAction === 'click';
        }
        return this.thyExpandTriggerAction.indexOf('click') !== -1;
    };
    ThyCascaderComponent.prototype.isHoverExpandTriggerAction = function () {
        if (typeof this.thyExpandTriggerAction === 'string') {
            return this.thyExpandTriggerAction === 'hover';
        }
        return this.thyExpandTriggerAction.indexOf('hover') !== -1;
    };
    ThyCascaderComponent.prototype.trggleClick = function ($event) {
        if (this.disabled) {
            return;
        }
        this.onTouched();
        if (this.isClickTriggerAction()) {
            this.setMenuVisible(!this.menuVisible);
        }
    };
    ThyCascaderComponent.prototype.trggleHover = function ($event) {
        if (this.disabled) {
            return;
        }
        if (this.isHoverTriggerAction()) {
            this.setMenuVisible(!this.menuVisible);
        }
    };
    ThyCascaderComponent.prototype.onOptionClick = function (option, index, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.setActiveOption(option, index, true);
    };
    ThyCascaderComponent.prototype.onOptionMouseover = function (option, index, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        if (!this.isHoverExpandTriggerAction()) {
            return;
        }
        this.setActiveOption(option, index, false);
    };
    ThyCascaderComponent.prototype.onMenuMouseleave = function (event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.isHoverTriggerAction()) {
            return;
        }
        this.setMenuVisible(!this.menuVisible);
    };
    ThyCascaderComponent.prototype.closeMenu = function () {
        this.setMenuVisible(false);
        this.setArrowClass();
    };
    ThyCascaderComponent.prototype.setActiveOption = function (option, index, select, loadChildren) {
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[index] = option;
        for (var i = index - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        if (index < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, index + 1);
        }
        if (option.children && option.children.length) {
            option.isLeaf = false;
            option.children.forEach(function (child) { return (child.parent = option); });
            this.setColumnData(option.children, index + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildren(option, index);
        }
        else {
            if (index < this.thyColumns.length - 1) {
                this.thyColumns = this.thyColumns.slice(0, index + 1);
            }
        }
        if (select) {
            this.onSelectOption(option, index);
        }
    };
    ThyCascaderComponent.prototype.onSelectOption = function (option, index) {
        this.thySelect.emit({ option: option, index: index });
        if (option.isLeaf ||
            this.thyChangeOnSelect ||
            this.shouldPerformSelection(option, index)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.setMenuVisible(false);
        }
    };
    ThyCascaderComponent.prototype.shouldPerformSelection = function (option, level) {
        return typeof this.thyChangeOn === 'function' ? this.thyChangeOn(option, level) === true : false;
    };
    ThyCascaderComponent.prototype.onValueChange = function () {
        var value = this.getSubmitValue();
        if (!arrayEquals(this.value, value)) {
            this.defaultValue = null;
            this.value = value;
            this.onChange(value);
            if (value.length === 0) {
                this.thyClear.emit();
            }
            this.thySelectionChange.emit(this.selectedOptions);
            this.thyChange.emit(value);
        }
    };
    ThyCascaderComponent.prototype.clearSelection = function ($event) {
        if ($event) {
            $event.stopPropagation();
            $event.preventDefault();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        this.onValueChange();
    };
    ThyCascaderComponent.prototype.focus = function () {
    };
    ThyCascaderComponent.prototype.loadChildren = function (option, index, success, failure) {
        var _this = this;
        if (this.thyLoadData) {
            this.isLoading = true;
            this.thyLoadData(option, index).then(function () {
                option.loading = _this.isLoading = false;
                if (option.children) {
                    option.children.forEach(function (child) {
                        return (child.parent = index < 0 ? undefined : option);
                    });
                    _this.setColumnData(option.children, index + 1);
                }
                if (success) {
                    success();
                }
            }, function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                if (failure) {
                    failure();
                }
            });
        }
    };
    ThyCascaderComponent.prototype.setColumnData = function (options, index) {
        if (!arrayEquals(this.thyColumns[index], options)) {
            this.thyColumns[index] = options;
            if (index < this.thyColumns.length - 1) {
                this.thyColumns = this.thyColumns.slice(0, index + 1);
            }
        }
    };
    ThyCascaderComponent.prototype.getSubmitValue = function () {
        var _this = this;
        var values = [];
        this.selectedOptions.forEach(function (option) {
            values.push(_this.getOptionValue(option));
        });
        return values;
    };
    var ThyCascaderComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", TemplateRef),
        __metadata("design:paramtypes", [TemplateRef])
    ], ThyCascaderComponent.prototype, "thyLabelRender", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyValueProperty", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyLabelProperty", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyPlaceHolder", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyCascaderComponent.prototype, "thyLoadData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyCascaderComponent.prototype, "thyChangeOnSelect", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyCascaderComponent.prototype, "thyShowInput", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyTriggerAction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyExpandTriggerAction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyMenuStyle", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], ThyCascaderComponent.prototype, "thyOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyCascaderComponent.prototype, "thyMenuClassName", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyCascaderComponent.prototype, "thyColumnClassName", null);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyCascaderComponent.prototype, "thySize", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thySelectionChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thySelect", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], ThyCascaderComponent.prototype, "thyChangeOn", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyCascaderComponent.prototype, "thyClear", void 0);
    __decorate([
        ViewChild('input'),
        __metadata("design:type", ElementRef)
    ], ThyCascaderComponent.prototype, "input", void 0);
    __decorate([
        ViewChild('menu'),
        __metadata("design:type", ElementRef)
    ], ThyCascaderComponent.prototype, "menu", void 0);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyCascaderComponent.prototype, "trggleClick", null);
    __decorate([
        HostListener('mouseover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ThyCascaderComponent.prototype, "trggleHover", null);
    ThyCascaderComponent = ThyCascaderComponent_1 = __decorate([
        Component({
            selector: 'thy-cascader,[thy-cascader]',
            template: "<div cdkOverlayOrigin #origin=\"cdkOverlayOrigin\" #trigger> <ng-container *ngIf=\"thyShowInput\"> <input #input thyInput type=\"text\" [thySize]=\"thySize\" [ngClass]=\"inputCls\" readonly [disabled]=\"disabled\" [placeholder]=\"showPlaceholder ? thyPlaceHolder : ''\" /> <i *ngIf=\"!isLoading\" class=\"wtf wtf-angle-down\" [ngClass]=\"arrowCls\"></i> <i *ngIf=\"!isLoading && labelRenderText\" class=\"wtf wtf-close\" [ngClass]=\"clearCls\" (click)=\"clearSelection($event)\"></i> <span [ngClass]=\"labelCls\"> <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container> <ng-template #labelTemplate> <ng-template [ngTemplateOutlet]=\"thyLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template> </ng-template> </span> </ng-container> </div> <ng-template cdkConnectedOverlay cdkConnectedOverlayHasBackdrop cdkConnectedOverlayBackdropClass=\"thy-cascader-backdrop\" [cdkConnectedOverlayOrigin]=\"origin\" [cdkConnectedOverlayPositions]=\"positions\" (backdropClick)=\"closeMenu()\" (detach)=\"closeMenu()\" (positionChange)=\"onPositionChange($event)\" [cdkConnectedOverlayOpen]=\"menuVisible\"> <div #menu [ngClass]=\"menuCls\" [ngStyle]=\"thyMenuStyle\" (mouseleave)=\"onMenuMouseleave($event)\"> <ul *ngFor=\"let options of thyColumns; let i = index;\" [ngClass]=\"menuColumnCls\"> <li thy-cascader-option *ngFor=\"let option of options\"  [option]=\"option\" (click)=\"onOptionClick(option, i, $event)\" (mouseover)=\"onOptionMouseover(option, i, $event)\" [thyLabelProperty]=\"thyLabelProperty\" [active]=\"isActivedOption(option,i)\"> </li> </ul> </div> </ng-template> ",
            providers: [
                UpdateHostClassService,
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyCascaderComponent_1; }),
                    multi: true
                }
            ],
            styles: [
                "\n            .thy-cascader-menus {\n                position: relative;\n            }\n        "
            ]
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef,
            ElementRef,
            UpdateHostClassService])
    ], ThyCascaderComponent);
    return ThyCascaderComponent;
}());
export { ThyCascaderComponent };
export { ɵ0 };
//# sourceMappingURL=cascader.component.js.map