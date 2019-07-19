var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ElementRef, NgZone } from '@angular/core';
import { isNumber } from '../util/helpers';
export var PlacementTypes;
(function (PlacementTypes) {
    PlacementTypes["left"] = "left";
    PlacementTypes["right"] = "right";
    PlacementTypes["center"] = "center";
    PlacementTypes["top"] = "top";
    PlacementTypes["bottom"] = "bottom";
})(PlacementTypes || (PlacementTypes = {}));
export var defaultPositioningOptions = {
    offset: 10,
    appendToBody: true,
    placement: 'bottom center'
};
var ThyPositioningService = /** @class */ (function () {
    function ThyPositioningService(ngZone) {
        this.ngZone = ngZone;
    }
    ThyPositioningService_1 = ThyPositioningService;
    ThyPositioningService.getHTMLElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return element;
    };
    ThyPositioningService.prototype.autoPosition = function (targetElPosition, hostElPosition, targetElement, preferredPosition) {
        if ((!preferredPosition || preferredPosition === 'right') &&
            targetElPosition.left + hostElPosition.left - targetElement.offsetWidth <
                0) {
            return 'right';
        }
        else if ((!preferredPosition || preferredPosition === 'top') &&
            targetElPosition.bottom +
                hostElPosition.bottom +
                targetElement.offsetHeight >
                window.innerHeight) {
            return 'top';
        }
        else if ((!preferredPosition || preferredPosition === 'bottom') &&
            targetElPosition.top + hostElPosition.top - targetElement.offsetHeight < 0) {
            return 'bottom';
        }
        else if ((!preferredPosition || preferredPosition === 'left') &&
            targetElPosition.right +
                hostElPosition.right +
                targetElement.offsetWidth >
                window.innerWidth) {
            return 'left';
        }
        return null;
    };
    ThyPositioningService.prototype.getAllStyles = function (element) {
        return window.getComputedStyle(element);
    };
    ThyPositioningService.prototype.getStyle = function (element, prop) {
        return this.getAllStyles(element)[prop];
    };
    ThyPositioningService.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    ThyPositioningService.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl &&
            offsetParentEl !== document.documentElement &&
            this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    ThyPositioningService.prototype.calculateTopBottomPosition = function (placementSecondary, attachElPosition, targetElPosition, offset) {
        var documentClientHeight = document.documentElement.clientHeight;
        if (placementSecondary === PlacementTypes.top) {
            targetElPosition.top = attachElPosition.top;
            targetElPosition.bottom = null;
            // Top 对齐时，下面的内容超过了整个屏幕的高度, 为了可以看见全部内容，牺牲 Top 对齐
            if (targetElPosition.top + targetElPosition.height > documentClientHeight) {
                targetElPosition.top = documentClientHeight - targetElPosition.height;
            }
        }
        else if (placementSecondary === PlacementTypes.bottom) {
            targetElPosition.bottom = documentClientHeight - attachElPosition.top - attachElPosition.height;
            targetElPosition.top = null;
            // Bottom 对齐时，上面的内容超过了整个屏幕的高度，为了可以看见全部内容，牺牲 Bottom 对齐
            if (targetElPosition.bottom + targetElPosition.height > documentClientHeight) {
                targetElPosition.bottom = documentClientHeight - targetElPosition.height;
            }
        }
        else {
            targetElPosition.top = attachElPosition.top +
                attachElPosition.height / 2 -
                targetElPosition.height / 2;
            // 顶部的内容被遮挡，牺牲居中，让顶部侧内容可见
            if (targetElPosition.top < 0) {
                targetElPosition.top = offset;
            }
            else if (targetElPosition.top + targetElPosition.height > documentClientHeight) {
                // 下面的内容被遮挡，牺牲居中，让下方的内容可见
                targetElPosition.top = documentClientHeight - targetElPosition.height + offset;
            }
            targetElPosition.bottom = null;
        }
        return targetElPosition;
    };
    ThyPositioningService.prototype.calculateLeftRightPosition = function (placementSecondary, attachElPosition, targetElPosition, offset) {
        var documentClientWidth = document.documentElement.clientWidth;
        if (placementSecondary === PlacementTypes.right) {
            targetElPosition.right = document.documentElement.clientWidth - attachElPosition.left - attachElPosition.width;
            targetElPosition.left = null;
            // 右对齐时，左侧的内容超过了整个屏幕的宽度, 为了可以看见全部内容，牺牲右对齐
            if (targetElPosition.right + targetElPosition.width > documentClientWidth) {
                targetElPosition.right = documentClientWidth - targetElPosition.width - offset;
            }
        }
        else if (placementSecondary === PlacementTypes.left) {
            targetElPosition.left = attachElPosition.left;
            // 左对齐时，右侧的内容超过了整个屏幕的宽度, 为了可以看见全部内容，牺牲左对齐
            if (targetElPosition.left + targetElPosition.width > documentClientWidth) {
                targetElPosition.left = documentClientWidth - targetElPosition.width - offset;
            }
        }
        else {
            targetElPosition.left = attachElPosition.left +
                attachElPosition.width / 2 -
                targetElPosition.width / 2;
            // 左侧的内容被遮挡，牺牲居中，让左侧内容可见
            if (targetElPosition.left < 0) {
                targetElPosition.left = offset;
            }
            else if (targetElPosition.left + targetElPosition.width > documentClientWidth) {
                // 右侧的内容被遮挡，牺牲居中，让右侧内容可见
                targetElPosition.left = documentClientWidth - targetElPosition.width - offset;
            }
        }
        return targetElPosition;
    };
    ThyPositioningService.prototype.autoAdaptTopBottom = function (placementPrimary, hostElPosition, targetElPosition, offset, autoAdapt) {
        if (autoAdapt === void 0) { autoAdapt = true; }
        if (!autoAdapt) {
            return;
        }
        var documentClientHeight = document.documentElement.clientHeight;
        if (placementPrimary === 'top') {
            // 如果 Top 空间不够，则自动适应 Bottom Top 和 Bottom 空间都不够，默认为可视区域Top
            if (hostElPosition.originBottom - hostElPosition.height - targetElPosition.height < 0) {
                if (documentClientHeight - hostElPosition.originBottom >= targetElPosition.height) {
                    targetElPosition.bottom = targetElPosition.bottom - targetElPosition.height - hostElPosition.height - offset;
                }
                else {
                    targetElPosition.bottom = null;
                    targetElPosition.top = hostElPosition.top - hostElPosition.originTop;
                }
            }
        }
        if (placementPrimary === 'bottom') {
            // 如果 Bottom 空间不够，则自动适应 Top，如果 Bottom 和 Top 空间都不够，默认为可视区域Top
            if (hostElPosition.originBottom + targetElPosition.height > documentClientHeight) {
                var newTop = hostElPosition.top - targetElPosition.height - offset;
                if (newTop > (hostElPosition.top - hostElPosition.originTop)) {
                    targetElPosition.top = newTop;
                }
                else {
                    targetElPosition.top = hostElPosition.top - hostElPosition.originTop;
                }
            }
        }
    };
    ThyPositioningService.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (this.getStyle(element, 'position') === 'fixed') {
            var bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right,
                originTop: bcRect.top,
                originBottom: bcRect.bottom,
                originLeft: bcRect.left,
                originRight: bcRect.right
            };
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    ThyPositioningService.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left,
            originTop: elBcr.top,
            originBottom: elBcr.bottom,
            originLeft: elBcr.left,
            originRight: elBcr.right
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    ThyPositioningService.prototype.calculatePosition = function (hostElement, targetElement, options) {
        var placement = options.placement, appendToBody = options.appendToBody, offset = options.offset, position = options.position, autoAdapt = options.autoAdapt;
        var hostElPosition = null;
        // 外部传入已经算好的位置, 需要设置 hostElPosition 宽度和高度为 0，不计算位置，主要使用于右击弹出位置计算
        if (position) {
            hostElPosition = {
                top: position.top || 0,
                left: position.left || 0,
                bottom: 0,
                right: 0,
                width: 0,
                height: 0
            };
        }
        else {
            hostElPosition = appendToBody
                ? this.offset(hostElement, false)
                : this.position(hostElement, false);
        }
        var targetElStyles = this.getAllStyles(targetElement);
        var documentClientWidth = document.documentElement.clientWidth;
        var documentClientHeight = document.documentElement.clientHeight;
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElBCR = targetElement.getBoundingClientRect();
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: null,
            bottom: null,
            left: null,
            right: null,
            originTop: targetElBCR.top,
            originBottom: targetElBCR.bottom,
            originLeft: targetElBCR.left,
            originRight: targetElBCR.right
        };
        if (placementPrimary === 'auto') {
            var newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement, placementSecondary);
            if (!newPlacementPrimary) {
                newPlacementPrimary = this.autoPosition(targetElPosition, hostElPosition, targetElement);
            }
            if (newPlacementPrimary) {
                placementPrimary = newPlacementPrimary;
            }
            targetElement.classList.add(placementPrimary);
        }
        switch (placementPrimary) {
            case 'top':
                targetElPosition.bottom = documentClientHeight - hostElPosition.top + offset;
                targetElPosition.top = null;
                this.autoAdaptTopBottom(placementPrimary, hostElPosition, targetElPosition, offset, autoAdapt);
                this.calculateLeftRightPosition(placementSecondary, hostElPosition, targetElPosition, offset);
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height + offset;
                this.autoAdaptTopBottom(placementPrimary, hostElPosition, targetElPosition, offset, autoAdapt);
                this.calculateLeftRightPosition(placementSecondary, hostElPosition, targetElPosition, offset);
                break;
            case 'left':
                targetElPosition.right = documentClientWidth - hostElPosition.left + offset;
                targetElPosition.left = null;
                this.calculateTopBottomPosition(placementSecondary, hostElPosition, targetElPosition, offset);
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width + offset;
                targetElPosition.right = null;
                this.calculateTopBottomPosition(placementSecondary, hostElPosition, targetElPosition, offset);
                break;
        }
        // targetElPosition.top = Math.round(targetElPosition.top);
        // targetElPosition.bottom = Math.round(targetElPosition.bottom);
        // targetElPosition.left = Math.round(targetElPosition.left);
        // targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    ThyPositioningService.prototype.setPosition = function (options) {
        var _this = this;
        var attach = options.attach, target = options.target;
        var attachElement = ThyPositioningService_1.getHTMLElement(attach);
        var targetElement = ThyPositioningService_1.getHTMLElement(target);
        setTimeout(function () {
            _this.ngZone.runOutsideAngular(function () {
                var pos = _this.calculatePosition(attachElement, targetElement, options);
                if (isNumber(pos.top)) {
                    targetElement.style.top = pos.top + "px";
                }
                else if (isNumber(pos.bottom)) {
                    targetElement.style.bottom = pos.bottom + "px";
                }
                if (isNumber(pos.left)) {
                    targetElement.style.left = pos.left + "px";
                }
                else if (isNumber(pos.right)) {
                    targetElement.style.right = pos.right + "px";
                }
            });
        });
    };
    var ThyPositioningService_1;
    ThyPositioningService = ThyPositioningService_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NgZone])
    ], ThyPositioningService);
    return ThyPositioningService;
}());
export { ThyPositioningService };
//# sourceMappingURL=positioning.service.js.map