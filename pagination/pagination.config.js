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
import { PaginationConfig } from 'ngx-bootstrap/pagination';
var ThyPaginationConfig = /** @class */ (function (_super) {
    __extends(ThyPaginationConfig, _super);
    function ThyPaginationConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.main = {
            maxSize: void 0,
            itemsPerPage: 20,
            boundaryLinks: false,
            directionLinks: true,
            firstText: '第一页',
            previousText: '上一页',
            nextText: '下一页',
            lastText: '最后一页',
            pageBtnClass: '',
            rotate: true
        };
        _this.pager = {
            itemPerPage: 20,
            previousText: '上一页',
            nextText: '下一页',
            pageBtnClass: '',
            align: true
        };
        return _this;
    }
    return ThyPaginationConfig;
}(PaginationConfig));
export { ThyPaginationConfig };
//# sourceMappingURL=pagination.config.js.map