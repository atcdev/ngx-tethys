export function inputValueToBoolean(value) {
    return value === '' || (value && value !== 'false');
}
export function isUndefined(value) {
    return value === undefined;
}
export function isNull(value) {
    return value === null;
}
export function isUndefinedOrNull(value) {
    return isUndefined(value) || isNull(value);
}
export function isArray(value) {
    return value && baseGetTag(value) === '[object Array]';
}
export function isEmpty(value) {
    return !(isArray(value) && value.length > 0);
}
export function isString(value) {
    return value && baseGetTag(value) === '[object String]';
}
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;
}
function baseGetTag(value) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var toString = objectProto.toString;
    var symToStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined;
    if (value == null) {
        return value === undefined ? '[object Undefined]' : '[object Null]';
    }
    if (!(symToStringTag && symToStringTag in Object(value))) {
        return toString.call(value);
    }
    var isOwn = hasOwnProperty.call(value, symToStringTag);
    var tag = value[symToStringTag];
    var unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    }
    catch (e) { }
    var result = toString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
export function isNumber(value) {
    return (typeof value === 'number' ||
        (isObjectLike(value) && baseGetTag(value) === '[object Number]'));
}
export function isObject(value) {
    // Avoid a V8 JIT bug in Chrome 19-20.
    // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
    var type = typeof value;
    return !!value && (type === 'object' || type === 'function');
}
export function isFunction(value) {
    var type = typeof value;
    return !!value && type === 'function';
}
export function isDate(value) {
    var type = typeof value;
    return !!value && type === 'object' && !!value.getTime;
}
export function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}
export function get(object, path, defaultValue) {
    var paths = path.split('.');
    var result = object[paths.shift()];
    while (result && paths.length) {
        result = result[paths.shift()];
    }
    return result === undefined ? defaultValue : result;
}
export function set(object, path, value) {
    if (object == null) {
        return object;
    }
    var paths = path.split('.');
    var index = -1;
    var length = paths.length;
    var lastIndex = length - 1;
    var nested = object;
    while (nested !== null && ++index < length) {
        var key = paths[index];
        if (isObject(nested)) {
            if (index === lastIndex) {
                nested[key] = value;
                nested = nested[key];
                break;
            }
            else {
                if (nested[key] == null) {
                    nested[key] = {};
                }
            }
        }
        nested = nested[key];
    }
    return object;
}
export function isBoolean(value) {
    return (value === true ||
        value === false ||
        (isObjectLike(value) && baseGetTag(value) === '[object Boolean]'));
}
export function fromArray(value) {
    if (Array.from && isFunction(Array.from)) {
        return Array.from(value);
    }
    else {
        return Array.prototype.slice.call(value);
    }
}
export function htmlElementIsEmpty(element) {
    if (element && element.childNodes) {
        var nodes = element.childNodes;
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            if (node.nodeType === Node.ELEMENT_NODE &&
                node.outerHTML.toString().trim().length !== 0) {
                return false;
            }
            else if (node.nodeType === Node.TEXT_NODE &&
                node.textContent.toString().trim().length !== 0) {
                return false;
            }
            else if (node.nodeType !== Node.COMMENT_NODE) {
                return false;
            }
        }
    }
    return true;
}
export function hexToRgb(hexValue, alpha) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function (m, r, g, b) { return r + r + g + g + b + b; });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var resultR = parseInt(rgb[1], 16);
    var resultG = parseInt(rgb[2], 16);
    var resultB = parseInt(rgb[3], 16);
    if (alpha) {
        return "rgba(" + resultR + "," + resultG + "," + resultB + "," + alpha + ")";
    }
    else {
        return "rgb(" + resultR + "," + resultG + "," + resultB + ")";
    }
}
export function formatDate(date) {
    if (isNumber(date)) {
        if (date.toString().length === 10) {
            return date;
        }
        else {
            return parseInt((date / 1000).toFixed(0), 10);
        }
    }
    else {
        return parseInt((date.getTime() / 1000).toFixed(0), 10);
    }
}
//# sourceMappingURL=helpers.js.map