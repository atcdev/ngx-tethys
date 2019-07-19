import { dom } from '../util';
var ScrollToService = /** @class */ (function () {
    function ScrollToService() {
    }
    ScrollToService._customScrollToElement = function (targetElement, containerElement) {
        var containerOffset = dom.getElementOffset(containerElement);
        var targetOffset = dom.getElementOffset(targetElement);
        // 选择项在顶部隐藏的偏移量 > 0 表示被顶部遮住隐藏
        var topOffset = containerOffset.top - targetOffset.top;
        // 选择项在底部隐藏的偏移量 > 0 表示被底部遮住隐藏
        var bottomOffset = targetOffset.top + targetOffset.height - (containerOffset.top + containerOffset.height);
        // 隐藏后滚动展示 targetElement 的偏移量，避免紧挨着头部或者底部
        var viewOffset = targetOffset.height;
        if (topOffset > 0) {
            containerElement.scrollTop = containerElement.scrollTop - topOffset - viewOffset;
        }
        else if (bottomOffset > 0) {
            containerElement.scrollTop = containerElement.scrollTop + bottomOffset + viewOffset;
        }
    };
    ScrollToService.scrollToElement = function (targetElement, containerElement) {
        if (targetElement) {
            this._customScrollToElement(targetElement, containerElement);
            // if (targetElement.scrollIntoView) {
            //     targetElement.scrollIntoView({
            //         behavior: 'smooth',
            //         block: 'center'
            //     });
            // } else {
            //     this._customScrollToElement(targetElement, containerElement);
            // }
        }
    };
    return ScrollToService;
}());
export { ScrollToService };
//# sourceMappingURL=scroll-to.service.js.map