var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewEncapsulation, TemplateRef, EventEmitter, IterableDiffers, ContentChildren, QueryList } from '@angular/core';
import { get, set, isString } from '../util/helpers';
import { ThyGridColumnComponent, THY_GRID_COLUMN_PARENT_COMPONENT } from './grid-column.component';
import { helpers } from '../util';
var themeMap = {
    default: 'table-default',
    bordered: 'table-bordered'
};
var customType = {
    index: 'index',
    checkbox: 'checkbox',
    radio: 'radio',
    switch: 'switch'
};
var ThyGridComponent = /** @class */ (function () {
    function ThyGridComponent(_differs) {
        this._differs = _differs;
        this.customType = customType;
        this.model = [];
        this.rowKey = '_id';
        this.columns = [];
        this.themeClass = themeMap['default'];
        this.className = '';
        this.loadingDone = true;
        this.emptyOptions = {};
        this.draggable = false;
        this.draggableOptions = {
            disabled: true,
            onStart: this.onDraggableStart.bind(this),
            onUpdate: this.onDraggableUpdate.bind(this)
        };
        this.selectedRadioRow = null;
        this.pagination = { index: 1, size: 20, total: 0 };
        this.wholeRowSelect = false;
        this._filter = null;
        this.thyOnSwitchChange = new EventEmitter();
        this.thyOnPageChange = new EventEmitter();
        this.thyOnMultiSelectChange = new EventEmitter();
        this.thyOnRadioSelectChange = new EventEmitter();
        this.thyOnDraggableChange = new EventEmitter();
        this.thyOnRowClick = new EventEmitter();
        this.thyOnRowContextMenu = new EventEmitter();
        this._bindTrackFn();
    }
    ThyGridComponent_1 = ThyGridComponent;
    Object.defineProperty(ThyGridComponent.prototype, "thyModel", {
        set: function (value) {
            this.model = value || [];
            this._diff = this._differs.find(this.model).create();
            this._initializeDataModel();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyRowKey", {
        set: function (value) {
            this.rowKey = value || this.rowKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyTheme", {
        set: function (value) {
            this.themeClass = themeMap[value];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyClassName", {
        set: function (value) {
            this.className = value || ' ';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyRowClassName", {
        set: function (value) {
            this.rowClassName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyLoadingDone", {
        set: function (value) {
            this.loadingDone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyLoadingText", {
        set: function (value) {
            this.loadingText = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyEmptyOptions", {
        set: function (value) {
            this.emptyOptions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyDraggable", {
        set: function (value) {
            if (helpers.isBoolean(value)) {
                this.draggable = value;
                this.draggableOptions.disabled = !value;
            }
            else {
                if (value) {
                    Object.assign(this.draggableOptions, value);
                    this.draggable = !this.draggableOptions.disabled;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyFilter", {
        set: function (value) {
            this._filter = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyPageIndex", {
        set: function (value) {
            this.pagination.index = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyPageSize", {
        set: function (value) {
            this.pagination.size = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyPageTotal", {
        set: function (value) {
            this.pagination.total = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "thyWholeRowSelect", {
        set: function (value) {
            if (value) {
                this.className += ' table-hover';
            }
            this.wholeRowSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyGridComponent.prototype, "listOfColumnComponents", {
        set: function (components) {
            if (components) {
                this._listOfColumnComponents = components;
                this._initializeColumns();
                this._initializeDataModel();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyGridComponent.prototype._getSelectionKeys = function (selections) {
        var _this = this;
        return selections.map(function (item) {
            if (typeof item === 'number' || typeof item === 'string') {
                return item;
            }
            else {
                return item[_this.rowKey];
            }
        });
    };
    ThyGridComponent.prototype._initializeColumns = function () {
        var _this = this;
        var components = this._listOfColumnComponents ? this._listOfColumnComponents.toArray() : [];
        this.columns = components.map(function (component) {
            var selections = _this._getSelectionKeys(component.selections);
            return {
                key: component.key,
                model: component.model,
                title: component.title,
                type: component.type,
                selections: selections,
                width: component.width,
                className: component.className,
                headerClassName: component.headerClassName,
                disabled: component.disabled,
                defaultText: component.defaultText,
                templateRef: component.cellTemplateRef,
                headerTemplateRef: component.headerTemplateRef
            };
        });
    };
    ThyGridComponent.prototype._initializeDataModel = function () {
        var _this = this;
        this.model.forEach(function (row) {
            _this.columns.forEach(function (column) {
                _this._initialSelections(row, column);
                _this._initialCustomModelValue(row, column);
            });
        });
    };
    ThyGridComponent.prototype._initialSelections = function (row, column) {
        if (column.selections && column.selections.length > 0) {
            if (column.type === 'checkbox') {
                row[column.key] = column.selections.includes(row[this.rowKey]);
                this.onModelChange(row, column);
            }
            if (column.type === 'radio') {
                if (column.selections.includes(row[this.rowKey])) {
                    this.selectedRadioRow = row;
                }
            }
        }
    };
    ThyGridComponent.prototype._initialCustomModelValue = function (row, column) {
        if (column.type === customType.switch) {
            row[column.key] = get(row, column.model);
        }
    };
    ThyGridComponent.prototype._refreshCustomModelValue = function (row) {
        var _this = this;
        this.columns.forEach(function (column) {
            _this._initialCustomModelValue(row, column);
        });
    };
    ThyGridComponent.prototype._applyDiffChanges = function (changes) {
        var _this = this;
        if (changes) {
            changes.forEachAddedItem(function (record) {
                _this._refreshCustomModelValue(record.item);
            });
        }
    };
    ThyGridComponent.prototype._bindTrackFn = function () {
        this.trackByFn = function (index, row) {
            return row && this.rowKey ? row[this.rowKey] : index;
        }.bind(this);
    };
    ThyGridComponent.prototype._destroyInvalidAttribute = function () {
        this.model.forEach(function (row) {
            for (var key in row) {
                if (key.includes('[$$column]')) {
                    delete row[key];
                }
            }
        });
    };
    ThyGridComponent.prototype._filterModel = function () {
        if (this.model && this.model.length > 0) {
            if (this._filter) {
            }
        }
    };
    ThyGridComponent.prototype.updateColumnSelections = function (key, selections) {
        var _this = this;
        var column = this.columns.find(function (item) { return item.key === key; });
        column.selections = this._getSelectionKeys(selections);
        this.model.forEach(function (row) {
            _this._initialSelections(row, column);
        });
    };
    ThyGridComponent.prototype.isTemplateRef = function (ref) {
        return ref instanceof TemplateRef;
    };
    ThyGridComponent.prototype.getModelValue = function (row, path) {
        return get(row, path);
    };
    ThyGridComponent.prototype.renderRowClassName = function (row, index) {
        if (!this.rowClassName) {
            return null;
        }
        if (isString(this.rowClassName)) {
            return this.rowClassName;
        }
        else {
            return this.rowClassName(row, index);
        }
    };
    ThyGridComponent.prototype.onModelChange = function (row, column) {
        if (column.model) {
            set(row, column.model, row[column.key]);
        }
    };
    ThyGridComponent.prototype.onStopPropagation = function (event) {
        if (this.wholeRowSelect) {
            event.stopPropagation();
        }
    };
    ThyGridComponent.prototype.onPageChange = function (event) {
        this.thyOnPageChange.emit(event);
    };
    ThyGridComponent.prototype.onCheckboxChange = function (row, column) {
        this.onModelChange(row, column);
        this.onMultiSelectChange(null, row, column);
    };
    ThyGridComponent.prototype.onMultiSelectChange = function (event, row, column) {
        var rows = this.model.filter(function (item) {
            return item[column.key];
        });
        var multiSelectEvent = {
            event: event,
            row: row,
            rows: rows
        };
        this.thyOnMultiSelectChange.emit(multiSelectEvent);
    };
    ThyGridComponent.prototype.onRadioSelectChange = function (event, row) {
        var radioSelectEvent = {
            event: event,
            row: row
        };
        this.thyOnRadioSelectChange.emit(radioSelectEvent);
    };
    ThyGridComponent.prototype.onSwitchChange = function (event, row, column) {
        var switchEvent = {
            event: event,
            row: row,
            refresh: function (value) {
                value = value || row;
                setTimeout(function () {
                    value[column.key] = get(value, column.model);
                });
            }
        };
        this.thyOnSwitchChange.emit(switchEvent);
    };
    ThyGridComponent.prototype.onDraggableStart = function (event) {
        this._draggableModel = this.model[event.oldIndex];
        var switchEvent = {};
    };
    ThyGridComponent.prototype.onDraggableUpdate = function (event) {
        var dragEvent = {
            model: this._draggableModel,
            models: this.model,
            oldIndex: event.oldIndex,
            newIndex: event.newIndex
        };
        this.thyOnDraggableChange.emit(dragEvent);
    };
    ThyGridComponent.prototype.onRowClick = function (event, row) {
        if (this.wholeRowSelect) {
            var column = this.columns.find(function (item) {
                return item.type === customType.checkbox || item.type === customType.radio;
            });
            if (!column.disabled) {
                if (column.type === customType.checkbox) {
                    row[column.key] = !row[column.key];
                    this.onModelChange(row, column);
                    this.onMultiSelectChange(event, row, column);
                }
                if (column.type === customType.radio) {
                    this.selectedRadioRow = row;
                    this.onRadioSelectChange(event, row);
                }
            }
        }
        var rowEvent = {
            event: event,
            row: row
        };
        this.thyOnRowClick.emit(rowEvent);
    };
    ThyGridComponent.prototype.onRowContextMenu = function (event, row) {
        var contextMenuEvent = {
            event: event,
            row: row
        };
        this.thyOnRowContextMenu.emit(contextMenuEvent);
    };
    // 临时处理Sortable禁用后某些事件还生效的问题
    ThyGridComponent.prototype.draggableStopPropagation = function (event) {
        if (this.draggableOptions.disabled) {
            event.stopPropagation();
        }
    };
    ThyGridComponent.prototype.ngOnInit = function () { };
    ThyGridComponent.prototype.ngDoCheck = function () {
        var changes = this._diff.diff(this.model);
        this._applyDiffChanges(changes);
    };
    ThyGridComponent.prototype.ngOnDestroy = function () {
        this._destroyInvalidAttribute();
    };
    var ThyGridComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyModel", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyRowKey", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyGridComponent.prototype, "thyTheme", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyGridComponent.prototype, "thyClassName", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyRowClassName", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyGridComponent.prototype, "thyLoadingDone", null);
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyGridComponent.prototype, "thyLoadingText", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyEmptyOptions", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyDraggable", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyGridComponent.prototype, "thyFilter", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyGridComponent.prototype, "thyPageIndex", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyGridComponent.prototype, "thyPageSize", null);
    __decorate([
        Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], ThyGridComponent.prototype, "thyPageTotal", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyGridComponent.prototype, "thyWholeRowSelect", null);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnSwitchChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnPageChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnMultiSelectChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnRadioSelectChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnDraggableChange", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnRowClick", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyGridComponent.prototype, "thyOnRowContextMenu", void 0);
    __decorate([
        ContentChildren(ThyGridColumnComponent),
        __metadata("design:type", QueryList),
        __metadata("design:paramtypes", [QueryList])
    ], ThyGridComponent.prototype, "listOfColumnComponents", null);
    ThyGridComponent = ThyGridComponent_1 = __decorate([
        Component({
            selector: 'thy-grid',
            template: "<table class=\"table\" [ngClass]=\"[themeClass, className]\" [class.table-draggable]=\"draggable\"> <thead> <tr> <th *ngFor=\"let column of columns\" [ngClass]=\"column.headerClassName\"> <ng-container *ngIf=\"!column.headerTemplateRef\"> {{ column.title }} </ng-container> <ng-container *ngIf=\"column.headerTemplateRef\"> <ng-template [ngTemplateOutlet]=\"column.headerTemplateRef\" [ngTemplateOutletContext]=\"{ $implicit: column }\" ></ng-template> </ng-container> </th> </tr> </thead> <tbody *ngIf=\"loadingDone\" [sortablejs]=\"model\" [sortablejsOptions]=\"draggableOptions\"> <tr *ngFor=\"let row of model; let i = index; trackBy: trackByFn\" [ngClass]=\"renderRowClassName(row, i)\" (mousedown)=\"draggableStopPropagation($event)\" (touchstart)=\"draggableStopPropagation($event)\" (pointerdown)=\"draggableStopPropagation($event)\" (click)=\"onRowClick($event, row)\" (thyContextMenu)=\"onRowContextMenu($event, row)\" > <td *ngFor=\"let column of columns; let j = index\" [ngClass]=\"column.className\" [width]=\"column.width\"> <ng-container *ngIf=\"j === 0 && draggable\"> <i class=\"table-draggable-icon wtf wtf-move\"></i> </ng-container> <!--template--> <ng-container *ngIf=\"isTemplateRef(column.templateRef)\"> <ng-template [ngTemplateOutlet]=\"column.templateRef\" [ngTemplateOutletContext]=\"{ $implicit: row }\"></ng-template> </ng-container> <!--not template--> <ng-container *ngIf=\"!isTemplateRef(column.templateRef)\"> <!-- default --> <ng-container *ngIf=\"column.model && !column.type\"> <ng-container *ngIf=\"(getModelValue(row, column.model) | isValidModelValue); else default\"> {{ getModelValue(row, column.model) }} </ng-container> <ng-template #default> <div class=\"text-info\"> {{ column.defaultText }} </div> </ng-template> </ng-container> <!-- index --> <ng-container *ngIf=\"column.type === customType.index\"> {{ i + 1 }} </ng-container> <!-- checkbox --> <ng-container *ngIf=\"column.type === customType.checkbox\"> <input type=\"checkbox\" [(ngModel)]=\"row[column.key]\" (ngModelChange)=\"onCheckboxChange(row, column)\" (click)=\"onStopPropagation($event)\" [disabled]=\"column.disabled\" /> </ng-container> <!-- radio --> <ng-container *ngIf=\"column.type === customType.radio\"> <input type=\"radio\" [(ngModel)]=\"selectedRadioRow\" [value]=\"row\" [disabled]=\"column.disabled\" (click)=\"onStopPropagation($event)\" (change)=\"onRadioSelectChange($event, row)\" /> </ng-container> <!-- switch --> <ng-container *ngIf=\"column.type === customType.switch\"> <thy-switch [(ngModel)]=\"row[column.key]\" (ngModelChange)=\"onModelChange(row, column)\" [disabled]=\"column.disabled\" (thyChange)=\"onSwitchChange($event, row, column)\" ></thy-switch> </ng-container> </ng-container> </td> </tr> <tr *ngIf=\"model && model.length === 0\" class=\"clear-hover\"> <td [colSpan]=\"columns.length\" height=\"280px\"> <thy-empty [thyMessage]=\"emptyOptions.message\" [thyTranslationKey]=\"emptyOptions.translationKey\" [thyTranslationValues]=\"emptyOptions.translationValues\" [thyEntityName]=\"emptyOptions.entityName\" [thyEntityNameTranslateKey]=\"emptyOptions.entityNameTranslateKey\" [thyIconClass]=\"emptyOptions.iconClass\" [thySize]=\"emptyOptions.size\" [thyMarginTop]=\"emptyOptions.marginTop\" [thyTopAuto]=\"emptyOptions.topAuto\" [thyContainer]=\"emptyOptions.container\" ></thy-empty> </td> </tr> </tbody> </table> <thy-loading [thyDone]=\"loadingDone\" [thyTip]=\"loadingText\"></thy-loading> <div class=\"clearfix\" *ngIf=\"pagination.total > pagination.size\"> <pagination class=\"float-right\" [directionLinks]=\"true\" [maxSize]=\"6\" [boundaryLinks]=\"false\" [rotate]=\"false\" [totalItems]=\"pagination.total\" [(ngModel)]=\"pagination.index\" [itemsPerPage]=\"pagination.size\" (pageChanged)=\"onPageChange($event)\" ></pagination> </div> <ng-template> <ng-content></ng-content> </ng-template> ",
            providers: [
                {
                    provide: THY_GRID_COLUMN_PARENT_COMPONENT,
                    useExisting: ThyGridComponent_1
                }
            ],
            encapsulation: ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [IterableDiffers])
    ], ThyGridComponent);
    return ThyGridComponent;
}());
export { ThyGridComponent };
//# sourceMappingURL=grid.component.js.map