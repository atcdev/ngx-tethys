var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input } from '@angular/core';
import { ThyMarkdownParserService } from './thy-markdown-parser.service';
import { $, liteMarked, mermaid, katex } from '../../typings';
var ThyMarkdownParserDirective = /** @class */ (function () {
    function ThyMarkdownParserDirective(elementRef, thyMarkdownParserService) {
        this.elementRef = elementRef;
        this.thyMarkdownParserService = thyMarkdownParserService;
        this.liteMarkedOptions = {
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: true,
            heading: true,
            link: true,
            list: true,
            wtlink: true,
            wthexcolor: true,
            wthexcolorRender: {
                className: 'msg-inline-color'
            },
            wtat: false,
            wthash: false,
            wtentity: true,
            wtentityRender: {
                className: 'slide-trigger'
            },
            wthashRender: {
                chlPrefix: '/messages/groups/'
            },
            wtexclamation: true,
            wtemoji: false,
            isParagraphDefault: true,
            isImageDefault: true,
            isBlockquoteDefault: true,
            isHrDefault: true,
            isStrongDefault: true,
            isEmDefault: true,
            isCodespanDefault: true,
            isCodeDefault: true,
            isDelDefault: true,
            isHtmlDefault: true,
            isTextEscape: true,
            isDef: true,
            isImgPreview: true
        };
    }
    Object.defineProperty(ThyMarkdownParserDirective.prototype, "thyMarkdownParser", {
        set: function (value) {
            if (value) {
                this.value = value;
                this.translateHTML();
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyMarkdownParserDirective.prototype.initGantt = function () {
        if (mermaid) {
            mermaid.parseError = function (err, hash) {
                mermaid.error = err;
            };
            mermaid.ganttConfig = {
                // Configuration for Gantt diagrams
                numberSectionStyles: 4,
                axisFormatter: [
                    [
                        '%I:%M',
                        function (d) {
                            // Within a day
                            return d.getHours();
                        }
                    ],
                    [
                        'w. %U',
                        function (d) {
                            // Monday a week
                            return d.getDay() === 1;
                        }
                    ],
                    [
                        '%a %d',
                        function (d) {
                            // Day within a week (not monday)
                            return d.getDay() && d.getDate() !== 1;
                        }
                    ],
                    [
                        '%b %d',
                        function (d) {
                            // within a month
                            return d.getDate() !== 1;
                        }
                    ],
                    [
                        '%m-%y',
                        function (d) {
                            // Month
                            return d.getMonth();
                        }
                    ]
                ]
            };
        }
    };
    ThyMarkdownParserDirective.prototype.initMarked = function () {
        // 设置marked
        var renderer = new liteMarked.Renderer();
        renderer.listitem = function (text) {
            if (!/^\[[ x]\]\s/.test(text)) {
                return liteMarked.Renderer.prototype.listitem(text);
            }
            // 任务列表
            var checkbox = $('<input type="checkbox" disabled/>');
            if (/^\[x\]\s/.test(text)) {
                // 完成的任务列表
                checkbox.attr('checked', true);
            }
            return $(liteMarked.Renderer.prototype.listitem(text.substring(3)))
                .addClass('task-list-item')
                .prepend(checkbox)[0].outerHTML;
        };
        renderer.codespan = function (text) {
            // inline code
            if (/^\$.+\$$/.test(text)) {
                // inline math
                var raw = /^\$(.+)\$$/.exec(text)[1];
                var line = raw
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&amp;/g, '&')
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'"); // unescape html characters
                try {
                    return katex.renderToString(line, { displayMode: false });
                }
                catch (err) {
                    return '<code>' + err + '</code>';
                }
            }
            return liteMarked.Renderer.prototype.codespan.apply(this, arguments);
        };
        renderer.code = function (code, language, escaped, line_number) {
            code = code.trim();
            var firstLine = code.split(/\n/)[0].trim();
            if (language === 'math') {
                // 数学公式
                var tex_1 = '';
                code.split(/\n\n/).forEach(function (line) {
                    // 连续两个换行，则开始下一个公式
                    line = line.trim();
                    if (line.length > 0) {
                        try {
                            tex_1 += katex.renderToString(line, { displayMode: true });
                        }
                        catch (err) {
                            tex_1 += '<pre>' + err + '</pre>';
                        }
                    }
                });
                return '<div data-line="' + line_number + '">' + tex_1 + '</div>';
            }
            else if (firstLine === 'gantt' ||
                firstLine === 'sequenceDiagram' ||
                firstLine.match(/^graph (?:TB|BT|RL|LR|TD);?$/)) {
                // mermaid
                if (firstLine === 'sequenceDiagram') {
                    code += '\n'; // 如果末尾没有空行，则语法错误
                }
                if (mermaid && mermaid.parse(code)) {
                    return '<div class="mermaid" data-line="' + line_number + '">' + code + '</div>';
                }
                else {
                    if (mermaid && mermaid.error) {
                        return '<pre data-line="' + line_number + '">' + mermaid.error + '</pre>';
                    }
                }
            }
            else {
                return liteMarked.Renderer.prototype.code.apply(this, arguments);
            }
        };
        renderer.html = function (html) {
            var result = liteMarked.Renderer.prototype.html.apply(this, arguments);
            var h = $(result.bold());
            return h.html();
        };
        renderer.paragraph = function (text) {
            var result = liteMarked.Renderer.prototype.paragraph.apply(this, arguments);
            var h = $(result.bold());
            return h.html();
        };
        liteMarked.setOptions(this.liteMarkedOptions);
    };
    ThyMarkdownParserDirective.prototype.initComponent = function () {
        // 初始化甘特图
        this.initGantt();
        // 初始解析器
        this.initMarked();
    };
    ThyMarkdownParserDirective.prototype.parseMarked = function (_value) {
        if (liteMarked && _value) {
            return liteMarked(_value);
        }
        else {
            return _value;
        }
    };
    ThyMarkdownParserDirective.prototype.parseMermaid = function () {
        if (mermaid) {
            mermaid.init();
        }
    };
    ThyMarkdownParserDirective.prototype.translateHTML = function () {
        var _this = this;
        this.initComponent();
        var _value = this.thyMarkdownParserService.filterHTML(this.value);
        _value = this.parseMarked(_value);
        setTimeout(function () {
            _this.parseMermaid();
        }, 100);
        this.elementRef.nativeElement.innerHTML = _value;
        $(this.elementRef.nativeElement)
            .find('a')
            .attr('target', function () {
            if (this.host !== location.host) {
                return '_blank';
            }
            else {
                var outer_path = [
                    'shared/',
                    'share/',
                    'club',
                    'videos',
                    'blog',
                    'plan',
                    'tour',
                    'mobile',
                    'security',
                    'uservoice',
                    'customers',
                    'press',
                    'help',
                    'guide',
                    'feedback',
                    'about',
                    'contact',
                    'privacy',
                    'terms'
                ].join(')|(/');
                outer_path = new RegExp('^(/' + outer_path + ')');
                if (outer_path.test(this.pathname)) {
                    return '_blank';
                }
            }
        });
    };
    ThyMarkdownParserDirective.prototype.ngOnInit = function () {
        var _emojiesSetting = this.thyMarkdownParserService.setEmoJies();
        if (_emojiesSetting) {
            this.liteMarkedOptions.wtemoji = true;
            this.liteMarkedOptions.wtemojiRender = _emojiesSetting;
        }
        this.translateHTML();
    };
    __decorate([
        Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ThyMarkdownParserDirective.prototype, "thyMarkdownParser", null);
    ThyMarkdownParserDirective = __decorate([
        Directive({
            selector: '[thyMarkdownParser]'
        }),
        __metadata("design:paramtypes", [ElementRef, ThyMarkdownParserService])
    ], ThyMarkdownParserDirective);
    return ThyMarkdownParserDirective;
}());
export { ThyMarkdownParserDirective };
//# sourceMappingURL=thy-markdown-parser.directive.js.map