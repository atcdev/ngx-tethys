import { DatepickerValueTypeEnum } from './datepicker-next.interface';
import { isDate, isObject, isNumber } from '../util/helpers';
export function getCountMonthDays(date) {
    var curDate = date || new Date();
    curDate.setMonth(curDate.getMonth() + 1);
    curDate.setDate(0);
    return curDate.getDate();
}
export function sliceArray(array, size) {
    var result = [];
    for (var x = 0; x < Math.ceil(array.length / size); x++) {
        var start = x * size;
        var end = start + size;
        result.push(array.slice(start, end));
    }
    return result;
}
export function calendarDateConvert(year, month, day) {
    if (month < 0 || month >= 12 || day < 0 || day >= 28) {
        var date = new Date(year, month, day || 1);
        return {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        };
    }
    else {
        return { year: year, month: month, day: day };
    }
}
export function getFullTimeText(value) {
    if (value < 10) {
        return "0" + value;
    }
    return value + '';
}
export function exploreValueTypePipe(value) {
    return {
        type: exploreValueType(value),
        value: value
    };
}
export function exploreValueType(value) {
    var res;
    if (isDate(value)) {
        res = DatepickerValueTypeEnum.date;
    }
    else if (isObject(value)) {
        if (value.hasOwnProperty('date')) {
            var result = exploreValueType(value.date);
            switch (result) {
                case DatepickerValueTypeEnum.timestamp:
                    res = DatepickerValueTypeEnum.objectTimestamp;
                    break;
                case DatepickerValueTypeEnum.timestampLong:
                    res = DatepickerValueTypeEnum.objectTimestampLong;
                    break;
                case DatepickerValueTypeEnum.date:
                    res = DatepickerValueTypeEnum.objectDate;
                    break;
                case DatepickerValueTypeEnum.empty:
                    res = DatepickerValueTypeEnum.objectEmpty;
                    break;
            }
        }
        else {
            res = DatepickerValueTypeEnum.objectEmpty;
        }
    }
    else if (isNumber(value)) {
        if (value.toString().length === 10) {
            res = DatepickerValueTypeEnum.timestamp;
        }
        else if (value.toString().length === 13) {
            res = DatepickerValueTypeEnum.timestampLong;
        }
        else {
            res = DatepickerValueTypeEnum.empty;
        }
    }
    else {
        res = DatepickerValueTypeEnum.empty;
    }
    return res;
}
export function combiningDataAccordingToDatepickerType(data) {
    var _value = {};
    var _date;
    var _withTime = false;
    switch (data.type) {
        case DatepickerValueTypeEnum.objectTimestamp:
            _date = new Date(data.value.date * 1000);
            _withTime = data.value.with_time;
            break;
        case DatepickerValueTypeEnum.objectTimestampLong:
            _date = new Date(data.value.date);
            _withTime = data.value.with_time;
            break;
        case DatepickerValueTypeEnum.objectDate:
            _date = data.value.date;
            _withTime = data.value.with_time;
            break;
        case DatepickerValueTypeEnum.timestamp:
            _date = new Date(data.value * 1000);
            break;
        case DatepickerValueTypeEnum.timestampLong:
            _date = new Date(data.value);
            break;
        case DatepickerValueTypeEnum.date:
            _date = data.value;
            break;
    }
    if (_date) {
        _value.year = _date.getFullYear();
        _value.month = _date.getMonth();
        _value.day = _date.getDate();
        if (_withTime) {
            _value.hour = _date.getHours();
            _value.minute = _date.getMinutes();
        }
    }
    return {
        type: data.type,
        value: _value
    };
}
export function combiningDataAccordingToOriginalDataType(data) {
    var date = new Date(data.value.year, data.value.month, data.value.day, data.value.hour || null, data.value.minute || null);
    var result = {};
    switch (data.originType) {
        case DatepickerValueTypeEnum.objectTimestamp:
        case DatepickerValueTypeEnum.objectEmpty:
            result.date = getTimestamp(date);
            result.with_time = data.value.hour !== undefined;
            break;
        case DatepickerValueTypeEnum.objectTimestampLong:
            result.date = date.getTime();
            result.with_time = data.value.hour !== undefined;
            break;
        case DatepickerValueTypeEnum.objectDate:
            result.date = date;
            result.with_time = data.value.hour !== undefined;
            break;
        case DatepickerValueTypeEnum.timestamp:
        case DatepickerValueTypeEnum.empty:
            result = getTimestamp(date);
            break;
        case DatepickerValueTypeEnum.timestampLong:
            result = date.getTime();
            break;
        case DatepickerValueTypeEnum.date:
            result = date;
            break;
    }
    return result;
}
export function getTimestamp(date) {
    return Math.floor(date.getTime() / 1000);
}
//# sourceMappingURL=util.js.map