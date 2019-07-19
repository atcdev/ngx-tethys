import { ElementRef } from '@angular/core';
import * as helpers from './helpers';
var proto = Element.prototype;
var vendor = proto.matches
    || proto.matchesSelector
    || proto.webkitMatchesSelector
    || proto.mozMatchesSelector
    || proto.proto.msMatchesSelector
    || proto.oMatchesSelector;
/**
 * Match `el` to `selector`.
 */
export function match(el, selector) {
    if (vendor) {
        return vendor.call(el, selector);
    }
    var nodes = el.parentNode.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i] === el) {
            return true;
        }
    }
    return false;
}
export function isDocument(element) {
    return (typeof HTMLDocument !== 'undefined' && element instanceof HTMLDocument)
        || (element.nodeType && element.nodeType === element.DOCUMENT_NODE);
}
export function isElement(element) {
    return (typeof HTMLElement !== 'undefined' && element instanceof HTMLElement)
        || (element.nodeType && element.nodeType === element.ELEMENT_NODE);
}
export function getWindow(elem) {
    return (elem != null && elem === elem.window) ? elem : elem.nodeType === 9 && elem.defaultView;
}
export function getElementOffset(elem) {
    var docElem, win, rect, doc;
    if (!elem) {
        return;
    }
    // Support: IE<=11+
    // Running getBoundingClientRect on a
    // disconnected node in IE throws an error
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    rect = elem.getBoundingClientRect();
    // Make sure element is not hidden (display: none)
    if (rect.width || rect.height) {
        doc = elem.ownerDocument;
        win = getWindow(doc);
        docElem = doc.documentElement;
        return {
            top: rect.top + win.pageYOffset - docElem.clientTop,
            left: rect.left + win.pageXOffset - docElem.clientLeft,
            height: rect.height,
            width: rect.width
        };
    }
    return rect;
}
export function getElementOuterHeight(element) {
    var _element = element.documentElement ? element.documentElement : element;
    var height = _element.clientHeight;
    var computedStyle = window.getComputedStyle(_element);
    height += parseInt(computedStyle.marginTop, 10);
    height += parseInt(computedStyle.marginBottom, 10);
    return height;
}
export function getHTMLElementBySelector(selector, defaultElementRef) {
    if (!selector) {
        return defaultElementRef.nativeElement;
    }
    else if (selector === 'body') {
        return document.body;
    }
    else if (helpers.isString(selector)) {
        return document.querySelector(selector);
    }
    else if (selector instanceof ElementRef) {
        return selector.nativeElement;
    }
    else {
        return selector;
    }
}
//# sourceMappingURL=dom.js.map