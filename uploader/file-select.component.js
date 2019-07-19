var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, ViewChild, ElementRef, HostListener, EventEmitter } from '@angular/core';
import { inputValueToBoolean } from '../util/helpers';
import { mimeTypeConvert } from './util';
var ThyFileSelectComponent = /** @class */ (function () {
    function ThyFileSelectComponent(elementRef) {
        this.elementRef = elementRef;
        this.thyOnFileSelect = new EventEmitter();
    }
    Object.defineProperty(ThyFileSelectComponent.prototype, "thyMultiple", {
        set: function (value) {
            this._multiple = inputValueToBoolean(value);
            if (this._multiple) {
                this.fileInput.nativeElement.setAttribute('multiple', '');
            }
            else {
                this.fileInput.nativeElement.removeAttribute('multiple');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFileSelectComponent.prototype, "thyAcceptFolder", {
        set: function (value) {
            this._acceptFolder = inputValueToBoolean(value);
            if (this._acceptFolder) {
                this.fileInput.nativeElement.setAttribute('webkitdirectory', '');
            }
            else {
                this.fileInput.nativeElement.removeAttribute('webkitdirectory');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThyFileSelectComponent.prototype, "thyAcceptType", {
        set: function (value) {
            this.acceptType = mimeTypeConvert(value);
        },
        enumerable: true,
        configurable: true
    });
    ThyFileSelectComponent.prototype.click = function ($event) {
        this.fileInput.nativeElement.click();
    };
    ThyFileSelectComponent.prototype._isInputTypeFile = function () {
        var nativeElement = this.elementRef.nativeElement;
        return (nativeElement.tagName.toLowerCase() === 'input' &&
            nativeElement.type &&
            nativeElement.type.toLowerCase() === 'file');
    };
    ThyFileSelectComponent.prototype.selectFile = function ($event) {
        var files = this.fileInput.nativeElement.files;
        if (files && files.length > 0) {
            this.thyOnFileSelect.emit({
                files: files,
                nativeEvent: $event
            });
            this.fileInput.nativeElement.value = '';
        }
    };
    ThyFileSelectComponent.prototype.ngOnInit = function () { };
    ThyFileSelectComponent.prototype.ngOnDestroy = function () { };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ThyFileSelectComponent.prototype, "thyOnFileSelect", void 0);
    __decorate([
        ViewChild('fileInput'),
        __metadata("design:type", ElementRef)
    ], ThyFileSelectComponent.prototype, "fileInput", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyFileSelectComponent.prototype, "thyMultiple", null);
    __decorate([
        Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ThyFileSelectComponent.prototype, "thyAcceptFolder", null);
    __decorate([
        Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], ThyFileSelectComponent.prototype, "thyAcceptType", null);
    __decorate([
        HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyFileSelectComponent.prototype, "click", null);
    ThyFileSelectComponent = __decorate([
        Component({
            selector: '[thyFileSelect],thy-file-select',
            template: "<ng-content></ng-content> <input style=\"width: 0; height: 0\" thyStopPropagation=\"true\" [hidden]=\"'true'\" #fileInput type=\"file\" (change)=\"selectFile($event)\" [attr.accept]=\"acceptType\"> "
        }),
        __metadata("design:paramtypes", [ElementRef])
    ], ThyFileSelectComponent);
    return ThyFileSelectComponent;
}());
export { ThyFileSelectComponent };
//# sourceMappingURL=file-select.component.js.map