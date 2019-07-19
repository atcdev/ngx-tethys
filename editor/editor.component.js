var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2, forwardRef, HostBinding, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ThyEditorService } from './editor.service';
import { ThyEditorLinkModuleService } from './editor-linkmodule.service';
var ThyEditorComponent = /** @class */ (function () {
    function ThyEditorComponent(elementRef, renderer, thyEditorService, thyEditorLinkModuleService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.thyEditorService = thyEditorService;
        this.thyEditorLinkModuleService = thyEditorLinkModuleService;
        this.className = '';
        this._thyWrapperClass = true;
        this._thyFullClass = true;
        this.uploadImg = new EventEmitter();
        this.value = '';
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    ThyEditorComponent_1 = ThyEditorComponent;
    ThyEditorComponent.prototype.paste = function (e) {
        e.stopPropagation();
        var $files = [];
        var theClipboardData = e.clipboardData;
        if (!theClipboardData.items) {
            return;
        }
        var _name = 'image';
        if (window['appGlobal']) {
            _name = window['appGlobal'].me.display_name;
        }
        var _date = '';
        var _now = new Date();
        _date =
            _now.getFullYear() +
                '-' +
                (_now.getMonth() + 1) +
                '-' +
                _now.getDate() +
                ' ' +
                _now.getHours() +
                ':' +
                _now.getMinutes() +
                ':' +
                _now.getSeconds();
        for (var _i = 0, _a = theClipboardData.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.kind === 'file' && item.type.indexOf('image/') === 0) {
                var imageFile = item.getAsFile();
                if (imageFile) {
                    imageFile.title = '[' + _name + '] ' + 'upload' + ' - ' + _date + '.png';
                    $files.push(imageFile);
                    e.preventDefault();
                    break;
                }
            }
        }
        if ($files.length > 0 && this.uploadImg) {
            this.uploadImg.emit({
                event: { files: $files },
                callBack: this.uploadImgAction.bind(this)
            });
        }
    };
    ThyEditorComponent.prototype.mouseenter = function (e) {
        this.thyEditorService.focusEditor();
    };
    ThyEditorComponent.prototype.mouseleave = function (e) {
        var isHasActive = this.hasParent(document.activeElement, this.editorWrap.nativeElement);
        if (!isHasActive) {
            this.thyEditorService.blurEditor();
        }
    };
    ThyEditorComponent.prototype.hasParent = function (el, parent) {
        var isHas = false;
        if (!el || !parent) {
            return isHas;
        }
        var p = el;
        while (!isHas && p) {
            if (p === parent) {
                isHas = true;
            }
            else {
                p = p.parentNode;
            }
        }
        return isHas;
    };
    ThyEditorComponent.prototype.writeValue = function (value) {
        var _this = this;
        this.model = value;
        if (this.model) {
            setTimeout(function () {
                _this.thyEditorService.setTextareaHeight();
            });
        }
    };
    ThyEditorComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    ThyEditorComponent.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    ThyEditorComponent.prototype.changeValue = function (event) {
        this.model = event;
        this.onModelChange(this.model);
        this.thyEditorService.setTextareaHeight();
    };
    ThyEditorComponent.prototype.insertTable = function () {
        this.thyEditorService.insertTable(this.changeValue.bind(this));
    };
    ThyEditorComponent.prototype.setHeaderLi = function (id) {
        this.thyEditorService.header_action = !this.thyEditorService.header_action;
    };
    ThyEditorComponent.prototype.styleFn = function (name, event) {
        this.thyEditorService.styleFn(name, event, this.changeValue.bind(this));
    };
    ThyEditorComponent.prototype.togglePreview = function () {
        this.thyEditorService.isPreview = !this.thyEditorService.isPreview;
        this.value = this.elementRef.nativeElement.querySelector('.thy-editor-textarea').value;
    };
    ThyEditorComponent.prototype.selectFiles = function (event) {
        if (this.uploadImg) {
            this.uploadImg.emit({
                event: event,
                callBack: this.uploadImgAction.bind(this)
            });
        }
    };
    ThyEditorComponent.prototype.uploadImgAction = function (src, title) {
        this.thyEditorService.insertContent('\n![' + title + '](' + src + ')\n', this.changeValue.bind(this));
    };
    ThyEditorComponent.prototype.selectModule = function (event) {
        this.thyEditorLinkModuleService.open(event, this.linkModuleAction.bind(this));
    };
    ThyEditorComponent.prototype.linkModuleAction = function (str) {
        this.thyEditorService.insertContent(str, this.changeValue.bind(this));
    };
    ThyEditorComponent.prototype.blurEditor = function () {
        var isHasActive = this.hasParent(document.activeElement, this.editorWrap.nativeElement);
        if (!isHasActive) {
            this.thyEditorService.blurEditor();
        }
    };
    ThyEditorComponent.prototype.ngOnInit = function () {
        this.thyEditorService.initEditor(this.config, this.elementRef, this.editorWrap);
        this._thyFullClass = this.thyEditorService.options.isHeightFull;
    };
    ThyEditorComponent.prototype.ngOnDestroy = function () {
        this.thyEditorService.clear();
    };
    var ThyEditorComponent_1;
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ThyEditorComponent.prototype, "config", void 0);
    __decorate([
        ViewChild('editorWrap'),
        __metadata("design:type", ElementRef)
    ], ThyEditorComponent.prototype, "editorWrap", void 0);
    __decorate([
        HostBinding('class.thy-editor-wrapper'),
        __metadata("design:type", Object)
    ], ThyEditorComponent.prototype, "_thyWrapperClass", void 0);
    __decorate([
        HostBinding('class.thy-editor-wrapper-full'),
        __metadata("design:type", Object)
    ], ThyEditorComponent.prototype, "_thyFullClass", void 0);
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], ThyEditorComponent.prototype, "uploadImg", void 0);
    __decorate([
        HostListener('paste', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyEditorComponent.prototype, "paste", null);
    __decorate([
        HostListener('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyEditorComponent.prototype, "mouseenter", null);
    __decorate([
        HostListener('mouseleave', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ThyEditorComponent.prototype, "mouseleave", null);
    ThyEditorComponent = ThyEditorComponent_1 = __decorate([
        Component({
            selector: 'thy-editor',
            template: "<div #editorWrap class=\"thy-editor thy-editor-{{ thyEditorService.options.type }} {{ className }}\"> <div class=\"thy-editor-toobar\"> <div class=\"noselect\"> <ul class=\"wtEditorToolBarUl\"> <li class=\"wtEditorToolBarli\" *ngFor=\"let item of thyEditorService.toolbars\" [ngClass]=\"{ active: item.id == 0 && thyEditorService.header_action }\" > <!-- <i *ngIf=\"item.type === 'custom'\" title=\"{{item.title}}\" class=\"{{item.className}} toolbar-icon\" (click)=\"item.action($event,vm)\"></i> --> <i *ngIf=\"item.type === 'headingFns'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"setHeaderLi(item.id)\" ></i> <div *ngIf=\"item.type === 'headingFns'\" [hidden]=\"!thyEditorService.header_action\" class=\"toolbar-menu\" flag=\"h\" > <ul flag=\"h\"> <li *ngFor=\"let n of thyEditorService.headers\" class=\"{{ n.className }}\" (click)=\"styleFn(n.name, $event)\" flag=\"h\" > {{ n.title }} </li> </ul> </div> <i *ngIf=\"item.type === 'styleFn'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <i *ngIf=\"item.type === 'uploadImg'\" title=\"{{ item.title }}\" thyFileSelect [thyMultiple]=\"thyEditorService.options.uploadImgMultiple\" [thyAcceptType]=\"thyEditorService.options.uploadImgAcceptType\" class=\"{{ item.className }} toolbar-icon\" (thyOnFileSelect)=\"selectFiles($event)\" ></i> <i *ngIf=\"item.type === 'tableFn'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <div *ngIf=\"item.type === 'tableFn'\" [hidden]=\"!thyEditorService.tableOptions.table_action\" class=\"table-menu\" flag=\"table\" (mouseleave)=\"thyEditorService.setTable(1, 1, false)\" > <ul flag=\"table\"> <li flag=\"table\" *ngFor=\"let n of thyEditorService.tableOptions.tableMenu\"> <i *ngFor=\"let s of n\" flag=\"table\" (click)=\"insertTable()\" (mouseenter)=\"thyEditorService.setTable(s[0], s[1], true)\" [ngClass]=\"{ active: s[0] <= thyEditorService.tableOptions.tableActiveX && s[1] <= thyEditorService.tableOptions.tableActiveY }\" ></i> </li> </ul> </div> <i *ngIf=\"item.type === 'linkModule'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"selectModule($event)\" ></i> <i *ngIf=\"item.type === 'mathFn'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <i *ngIf=\"item.type === 'flowchart'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <i *ngIf=\"item.type === 'diagram'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <i *ngIf=\"item.type === 'gantt'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"styleFn(item.name, $event)\" ></i> <i *ngIf=\"item.type === 'preview'\" title=\"{{ item.title }}\" class=\"{{ item.className }} toolbar-icon\" (click)=\"togglePreview()\" ></i> <i *ngIf=\"item.type === 'divider'\" class=\"divider\"></i> </li> </ul> </div> </div> <div class=\"thy-editor-container\"> <div class=\"thy-editor-container-code\"> <textarea class=\"thy-editor-textarea\" (blur)=\"blurEditor()\" [(ngModel)]=\"model\" (ngModelChange)=\"changeValue($event)\" [placeholder]=\"thyEditorService.options.placeholder\" ></textarea> </div> <div class=\"thy-editor-container-preview\" [hidden]=\"!thyEditorService.isPreview\"> <article class=\"thy-editor-container-preview-body markdown-body\" [thyMarkdownParser]=\"model\"></article> </div> </div> </div> ",
            providers: [
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(function () { return ThyEditorComponent_1; }),
                    multi: true
                },
                ThyEditorService
            ]
        }),
        __metadata("design:paramtypes", [ElementRef,
            Renderer2,
            ThyEditorService,
            ThyEditorLinkModuleService])
    ], ThyEditorComponent);
    return ThyEditorComponent;
}());
export { ThyEditorComponent };
//# sourceMappingURL=editor.component.js.map