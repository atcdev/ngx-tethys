import { helpers } from '../util';
import { MIME_Map } from './constant';
export function mimeTypeConvert(value) {
    var valueArray;
    var _acceptTypeArray = [];
    if (helpers.isArray(value)) {
        valueArray = value;
    }
    else if (helpers.isString(value)) {
        valueArray = value.split(',');
    }
    else {
        valueArray = [];
    }
    if (valueArray.length > 0) {
        valueArray.forEach(function (n) {
            if (MIME_Map[n]) {
                _acceptTypeArray.push(MIME_Map[n]);
            }
            else {
                console.error('ngx-tethys Error: Uploaded files that do not support extensions.');
            }
        });
    }
    return _acceptTypeArray.join(',');
}
//# sourceMappingURL=util.js.map