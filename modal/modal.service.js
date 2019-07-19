var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, RendererFactory2, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {}
};
var ThyModalService = /** @class */ (function (_super) {
    __extends(ThyModalService, _super);
    function ThyModalService(modalService, rendererFactory, clf) {
        var _this = _super.call(this, rendererFactory, clf) || this;
        _this.modalService = modalService;
        _this.onShow = new EventEmitter();
        _this.onShown = new EventEmitter();
        _this.onHide = new EventEmitter();
        _this.onHidden = new EventEmitter();
        _this.bsModalRefs = [];
        _this.modalService.onHidden.subscribe(function () {
            if (_this.bsModalRefs.length > 0) {
                _this.bsModalRefs.splice(_this.bsModalRefs.length - 1, 1);
            }
        });
        return _this;
    }
    ThyModalService.prototype.show = function (content, config) {
        this.setModalConfig(config);
        var bsModalRef = this.modalService.show(content, this.modalConfig);
        this.bsModalRefs.push(bsModalRef);
        return bsModalRef;
    };
    ThyModalService.prototype.close = function () {
        if (this.bsModalRefs.length > 0) {
            this.bsModalRefs[this.bsModalRefs.length - 1].hide();
        }
    };
    ThyModalService.prototype.setModalConfig = function (config) {
        this.modalConfig = Object.assign({}, modalConfigDefaults, config);
        if (config && config.size) {
            this.modalConfig.class = "modal-" + config.size;
        }
    };
    ThyModalService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [BsModalService, RendererFactory2, ComponentLoaderFactory])
    ], ThyModalService);
    return ThyModalService;
}(BsModalService));
export { ThyModalService };
var ThyModalConfigInfo = /** @class */ (function () {
    function ThyModalConfigInfo() {
    }
    return ThyModalConfigInfo;
}());
export { ThyModalConfigInfo };
//# sourceMappingURL=modal.service.js.map