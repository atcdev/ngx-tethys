var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Renderer2 } from '@angular/core';
import { thyEditorConstant } from './editor.constant';
var ThyEditorService = /** @class */ (function () {
    function ThyEditorService(renderer) {
        this.renderer = renderer;
        this.options = {
            placeholder: '输入内容...',
            fontSize: '16px',
            theme: 'kuroir',
            maxHeight: 600,
            isHeightFull: false,
            className: '',
            autofocus: true,
            type: 'simple',
            locale: 'zh-cn',
            hideButtons: [],
            additionalButtons: [],
            replaceButtons: [],
            extendButtons: [],
            uploadImgMultiple: true,
            uploadImgAcceptType: ['.gif', '.jpeg', '.png']
        };
        // public hideButtons: any = []; // 要不显示的图标[]
        // public additionalButtons: any = []; // 扩展的图标 {title:'扩展',className:'fa fa-music',type:'custom',action:musicFn,before:2}
        // public replaceButtons: any = []; // 替换默认的图标 {title:'插入图片',className:'fa fa-file-image-o',type:'custom',action:imageFn,id:17}
        // public extendButtons: any = [];
        this.toolbars = [];
        this.headers = [];
        this.header_action = false;
        this.isPreview = false;
        this.tableOptions = {
            table_action: false,
            tableActiveX: 1,
            tableActiveY: 1,
            tableMenu: thyEditorConstant.tableMenu
        };
    }
    ThyEditorService.prototype.ngOnInit = function () { };
    ThyEditorService.prototype.ngOnDestroy = function () {
        this.clear();
    };
    ThyEditorService.prototype.getSelection = function () {
        return {
            target: this.textareaDom,
            start: this.textareaDom.selectionStart,
            end: this.textareaDom.selectionEnd,
            text: this.textareaDom.value.substring(this.textareaDom.selectionStart, this.textareaDom.selectionEnd)
        };
    };
    ThyEditorService.prototype.hasSelection = function () {
        if (this.textareaDom.selectionStart === this.textareaDom.selectionEnd) {
            return false;
        }
        else {
            return true;
        }
    };
    ThyEditorService.prototype.emojiFn = function (htmlstr) {
        // return htmlstr.replace(thyEditorConstant.emojRegx, function (match) {
        //     if (thyEditorConstant.emojis.indexOf(match) !== -1) {
        //         const name = String(match).slice(1, -1);
        //         return '<img class="emoji" title=":' + name + ':" alt="' +
        //             name + '" src="https://s.tylingsoft.com/emoji-icons/' + name + '.png" width="18" />';
        //     } else {
        //         return match;
        //     }
        // });
    };
    ThyEditorService.prototype.insertText = function (text, start, end) {
        this.textareaDom.focus();
        var leftText = this.textareaDom.value.substring(0, start);
        var rightText = this.textareaDom.value.substring(end);
        this.textareaDom.value = leftText + text + rightText;
    };
    ThyEditorService.prototype.getInsertText = function (text, start, end) {
        this.textareaDom.focus();
        var leftText = this.textareaDom.value.substring(0, start);
        var rightText = this.textareaDom.value.substring(end);
        return leftText + text + rightText;
    };
    ThyEditorService.prototype.clearSelection = function () {
        this.textareaDom.selectionStart = this.textareaDom.selectionEnd;
    };
    ThyEditorService.prototype.setFocus = function (star, end) {
        var _this = this;
        setTimeout(function () {
            _this.textareaDom.selectionStart = star;
            _this.textareaDom.selectionEnd = end;
        });
    };
    ThyEditorService.prototype.isRowFirst = function (start) {
        var val = this.textareaDom.value.substr(0, start);
        var _text = val.substr(val.lastIndexOf('\n') + 1);
        if (_text.length === 0) {
            return true;
        }
        return false;
    };
    ThyEditorService.prototype.getRowText = function (start) {
        var val = this.textareaDom.value.substr(0, start);
        var _text = val.substr(val.lastIndexOf('\n') + 1);
        return _text;
    };
    // replaceContent(content: string, sel: any) {
    //     this.insertText(content, sel.start, sel.end);
    //     this.textareaDom.focus();
    // }
    ThyEditorService.prototype.insertContent = function (content, change) {
        var sel = this.getSelection();
        change(this.getInsertText(content, sel.start, sel.end));
        this.textareaDom.focus();
    };
    ThyEditorService.prototype.setOptions = function (config) {
        if (config) {
            this.options = Object.assign(this.options, config);
            if (config && config.uploadImg) {
                if (config.uploadImg.multiple) {
                    this.options.uploadImgMultiple = config.uploadImg.multiple;
                }
                if (config.uploadImg.acceptType) {
                    this.options.uploadImgAcceptType = config.uploadImg.acceptType;
                }
            }
        }
    };
    ThyEditorService.prototype.setToolbars = function () {
        var _this = this;
        // this.toolbars = [];
        thyEditorConstant.typeArray[this.options.type].forEach(function (value, index) {
            var _tempBtn = thyEditorConstant.allButtons[value];
            if (!_tempBtn) {
                _tempBtn = _this.options.extendButtons[value];
            }
            if (_tempBtn) {
                _this.toolbars[_this.toolbars.length] = _tempBtn;
            }
        });
        thyEditorConstant.typeArray['hs'].forEach(function (value, index) {
            var _tempBtn = thyEditorConstant.allButtons[value];
            if (_tempBtn) {
                _this.headers[_this.headers.length] = _tempBtn;
            }
        });
        if (this.options.hideButtons.length > 0) {
            this.options.hideButtons.forEach(function (n) {
                if (n.id) {
                    var _index = _this.toolbars.findIndex(function (t) {
                        return n.id === t.id;
                    });
                    _this.toolbars.splice(_index, 1);
                }
            });
        }
        if (this.options.replaceButtons.length > 0) {
            this.options.replaceButtons.forEach(function (n) {
                if (n.id) {
                    var _index = _this.toolbars.findIndex(function (t) {
                        return n.id === t.id;
                    });
                    _this.toolbars.splice(_index, 1, n);
                }
            });
        }
        if (this.options.additionalButtons.length > 0) {
            this.options.additionalButtons.forEach(function (n) {
                if (n.before) {
                    var _index = _this.toolbars.findIndex(_this.toolbars, function (t) {
                        return t.id === n.before;
                    });
                    _this.toolbars.splice(_index, 0, n);
                }
                else {
                    _this.toolbars.push(n);
                }
            });
        }
    };
    ThyEditorService.prototype.initEditor = function (config, elementRef, editorWrap) {
        var _this = this;
        this.setOptions(config);
        this.elementRef = elementRef;
        this.editorWrap = editorWrap.nativeElement;
        this.textareaDom = this.elementRef.nativeElement.querySelector('.thy-editor-textarea');
        this.previewDom = this.elementRef.nativeElement.querySelector('.thy-editor-container-preview-body');
        this.setToolbars();
        if (this.options.autofocus) {
            setTimeout(function () {
                _this.textareaDom.focus();
                _this.focusEditor();
            }, 200);
        }
        if (this.options.isHeightFull) {
            this.textareaDom.style.height = '100%';
        }
    };
    ThyEditorService.prototype.focusEditor = function () {
        this.renderer.addClass(this.editorWrap, 'thy-editor-focus');
    };
    ThyEditorService.prototype.blurEditor = function () {
        this.renderer.removeClass(this.editorWrap, 'thy-editor-focus');
    };
    ThyEditorService.prototype.getLocaleText = function (key) {
        var _locale = thyEditorConstant.language[this.options.locale];
        if (_locale) {
            var _localText = _locale[key];
            if (_localText) {
                return _localText;
            }
            else {
                console.log('text ' + key + ' none!');
            }
        }
        else {
            console.log('locale ' + this.options.locale + ' none!');
            _locale = thyEditorConstant.language['zh-cn'];
            var _localText = _locale[key];
            if (_localText) {
                return _localText;
            }
            else {
                console.log('text ' + key + ' none!');
            }
        }
    };
    ThyEditorService.prototype.insert = function (flag, title, sel, keepSelection, search, replace, change) {
        // 有序列表和无序列表选择统一添加
        if (sel.text.indexOf('\n') !== -1 && keepSelection && search && replace) {
            if (sel.text.length > 0) {
                sel = this.getSelection();
            }
            var replaceStr = sel.text.replace(search, replace);
            var _sub = this.getRowText(sel.start);
            // this.insertText(replaceStr, sel.start - _sub.length, sel.end);
            change(this.getInsertText(replaceStr, sel.start - _sub.length, sel.end));
            this.setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
        }
        else {
            if (sel.text.length > 0) {
                this.clearSelection();
                sel = this.getSelection();
            }
            var _sub = this.getRowText(sel.start);
            // this.insertText(flag + ' ' + _sub, sel.start - _sub.length, sel.end);
            change(this.getInsertText(flag + ' ' + _sub, sel.start - _sub.length, sel.end));
            this.setFocus(sel.start + flag.length + 1, sel.start + flag.length + 1);
        }
    };
    // 插入markdown
    ThyEditorService.prototype.styleFn = function (param, event, change) {
        var sel = this.getSelection();
        switch (param) {
            case 'bold':
                if (this.hasSelection()) {
                    if (sel.text.indexOf('\n') !== -1) {
                        sel = this.getSelection();
                        var _str = sel.text.replace(/([^\n]+)([\n\s]*)/g, '**$1**$2');
                        var _sub = this.getRowText(sel.start);
                        change(this.getInsertText(_str, sel.start - _sub.length, sel.end));
                        this.setFocus(sel.start + _str.length, sel.start + _str.length);
                    }
                    else {
                        change(this.getInsertText(' **' + sel.text + '** ', sel.start, sel.end));
                        this.setFocus(sel.start, sel.start + 6 + sel.text.length);
                    }
                }
                else {
                    var _sub = this.getRowText(sel.start);
                    if (_sub.length > 0) {
                        // this.insertText(' **** ', sel.start, sel.end);
                        change(this.getInsertText(' **** ', sel.start, sel.end));
                        this.setFocus(sel.start + 3, sel.start + 3);
                    }
                    else {
                        // this.insertText('****', sel.start, sel.end);
                        change(this.getInsertText('****', sel.start, sel.end));
                        this.setFocus(sel.start + 2, sel.start + 2);
                    }
                }
                break;
            case 'italic':
                if (this.hasSelection()) {
                    if (sel.text.indexOf('\n') !== -1) {
                        sel = this.getSelection();
                        var _str = sel.text.replace(/([^\n]+)([\n\s]*)/g, '_$1_$2');
                        var _sub = this.getRowText(sel.start);
                        // this.insertText(_str, sel.start - _sub.length, sel.end);
                        change(this.getInsertText(_str, sel.start - _sub.length, sel.end));
                        this.setFocus(sel.start + _str.length, sel.start + _str.length);
                    }
                    else {
                        // this.insertText(' *' + sel.text + '* ', sel.start, sel.end);
                        change(this.getInsertText(' *' + sel.text + '* ', sel.start, sel.end));
                        this.setFocus(sel.start, sel.start + 4 + sel.text.length);
                    }
                }
                else {
                    var _sub = this.getRowText(sel.start);
                    if (_sub.length > 0) {
                        // this.insertText(' ** ', sel.start, sel.end);
                        change(this.getInsertText(' ** ', sel.start, sel.end));
                        this.setFocus(sel.start + 2, sel.start + 2);
                    }
                    else {
                        // this.insertText('**', sel.start, sel.end);
                        change(this.getInsertText('**', sel.start, sel.end));
                        this.setFocus(sel.start + 1, sel.start + 1);
                    }
                }
                break;
            case 'underline':
                if (this.hasSelection()) {
                    if (sel.text.indexOf('\n') !== -1) {
                        sel = this.getSelection();
                        var _str = sel.text.replace(/([^\n]+)([\n\s]*)/g, '<u>$1</u>$2');
                        var _sub = this.getRowText(sel.start);
                        // this.insertText(_str, sel.start - _sub.length, sel.end);
                        change(this.getInsertText(_str, sel.start - _sub.length, sel.end));
                        this.setFocus(sel.start + _str.length, sel.start + _str.length);
                    }
                    else {
                        // this.insertText('<u>' + sel.text + '</u>', sel.start, sel.end);
                        change(this.getInsertText('<u>' + sel.text + '</u>', sel.start, sel.end));
                        this.setFocus(sel.start, sel.start + 7 + sel.text.length);
                    }
                }
                else {
                    change(this.getInsertText('<u></u>', sel.start, sel.end));
                    this.setFocus(sel.start + 3, sel.start + 3);
                }
                break;
            case 'strikethrough':
                if (this.hasSelection()) {
                    if (sel.text.indexOf('\n') !== -1) {
                        sel = this.getSelection();
                        var replaceStr = sel.text.replace(/([^\n]+)([\n\s]*)/g, ' ~~$1~~ $2');
                        var _sub = this.getRowText(sel.start);
                        // this.insertText(replaceStr, sel.start - _sub.length, sel.end);
                        change(this.getInsertText(replaceStr, sel.start - _sub.length, sel.end));
                        this.setFocus(sel.start + replaceStr.length, sel.start + replaceStr.length);
                    }
                    else {
                        // this.insertText(' ~~' + sel.text + '~~ ', sel.start, sel.end);
                        change(this.getInsertText(' ~~' + sel.text + '~~ ', sel.start, sel.end));
                        this.setFocus(sel.start, sel.start + 6 + sel.text.length);
                    }
                }
                else {
                    var _sub = this.getRowText(sel.start);
                    if (_sub.length > 0) {
                        // this.insertText(' ~~~~ ', sel.start, sel.end);
                        change(this.getInsertText(' ~~~~ ', sel.start, sel.end));
                        this.setFocus(sel.start + 3, sel.start + 3);
                    }
                    else {
                        // this.insertText('~~~~', sel.start, sel.end);
                        change(this.getInsertText('~~~~', sel.start, sel.end));
                        this.setFocus(sel.start + 2, sel.start + 2);
                    }
                }
                break;
            case 'h1':
                this.insert('#', '', sel, true, /(.+)([\n]?)/g, '\n# $1$2\n', change);
                this.header_action = false;
                break;
            case 'h2':
                this.insert('##', '', sel, true, /(.+)([\n]?)/g, '\n## $1$2\n', change);
                this.header_action = false;
                break;
            case 'h3':
                this.insert('###', '', sel, true, /(.+)([\n]?)/g, '\n### $1$2\n', change);
                this.header_action = false;
                break;
            case 'h4':
                this.insert('####', '', sel, true, /(.+)([\n]?)/g, '\n#### $1$2\n', change);
                this.header_action = false;
                break;
            case 'h5':
                this.insert('#####', '', sel, true, /(.+)([\n]?)/g, '\n##### $1$2\n', change);
                this.header_action = false;
                break;
            case 'h6':
                this.insert('######', '', sel, true, /(.+)([\n]?)/g, '\n###### $1$2\n', change);
                this.header_action = false;
                break;
            case 'hr':
                if (sel.text.length > 0) {
                    this.clearSelection();
                    sel = this.getSelection();
                }
                // this.insertText('\n---\n', sel.start, sel.end);
                change(this.getInsertText('\n---\n', sel.start, sel.end));
                this.setFocus(sel.start + 5, sel.start + 5);
                break;
            case 'quote':
                this.insert('>', '', sel, true, /(.+)([\n]?)/g, '\n> $1$2', change);
                break;
            case 'list':
                this.insert('-', '', sel, true, /(.+)([\n]?)/g, '\n- $1$2', change);
                break;
            case 'list-2':
                this.insert('1.', '', sel, true, /(.+)([\n]?)/g, '\n1. $1$2', change);
                break;
            case 'square':
                this.insert('- [ ] ', '', sel, true, /(.+)([\n]?)/g, '- [ ] $1$2', change);
                break;
            case 'check-square':
                this.insert('- [x] ', '', sel, true, /(.+)([\n]?)/g, '- [x] $1$2', change);
                break;
            case 'link':
                var _iUrl = 'http://example.com';
                var _localText = this.getLocaleText('link-text');
                if (sel.text.length > 0) {
                    if (sel.text.indexOf('http') !== -1) {
                        _iUrl = sel.text;
                    }
                    else {
                        _localText = sel.text;
                    }
                }
                var _aUrl = '[' + _localText + '](' + _iUrl + ')';
                // this.insertText(_aUrl, sel.start, sel.end);
                change(this.getInsertText(_aUrl, sel.start, sel.end));
                this.setFocus(sel.start + _aUrl.length, sel.start + _aUrl.length);
                break;
            case 'image':
                var _imageText = this.getLocaleText('image-text');
                var iUrl = 'http://lesschat.com/x.png';
                if (sel.text.length > 0) {
                    if (sel.text.indexOf('http') !== -1) {
                        iUrl = sel.text;
                    }
                    else {
                        _imageText = sel.text;
                    }
                }
                var aUrl = '![' + _imageText + '](' + iUrl + ')';
                // this.insertText(aUrl, sel.start, sel.end);
                change(this.getInsertText(aUrl, sel.start, sel.end));
                this.setFocus(sel.start + aUrl.length, sel.start + aUrl.length);
                break;
            case 'code':
                if (sel.text.length === 0) {
                    // this.insertText('\n```\n  \n```\n', sel.start, sel.end);
                    change(this.getInsertText('\n```\n  \n```\n', sel.start, sel.end));
                    this.setFocus(sel.start + 6, sel.start + 6);
                }
                else {
                    change(this.getInsertText('`' + sel.text + '`', sel.start, sel.end));
                    this.setFocus(sel.start + 2 + sel.text.length, sel.start + 2 + sel.text.length);
                }
                break;
            case 'table':
                this.tableOptions.table_action = true;
                break;
            case 'math':
                var _mathText = sel.text;
                if (_mathText.length === 0) {
                    _mathText = 'E = mc^2';
                }
                change(this.getInsertText('\n```math\n' + _mathText + '\n```\n', sel.start, sel.end));
                this.setFocus(sel.start + _mathText.length + 14, sel.start + _mathText.length + 14);
                break;
            case 'flow':
                var flowText = sel.text;
                if (flowText.length === 0) {
                    flowText = 'graph LR\nA-->B';
                }
                change(this.getInsertText('\n```\n' + flowText + '\n```\n', sel.start, sel.end));
                this.setFocus(sel.start + flowText.length + 10, sel.start + flowText.length + 10);
                break;
            case 'diagram':
                var diagramText = sel.text;
                if (diagramText.length === 0) {
                    // text = 'sequenceDiagram\nA->>B: 你好吗?\nB->>A: 我很好3!';
                    diagramText = this.getLocaleText('diagram');
                }
                change(this.getInsertText('\n```\n' + diagramText + '\n```\n', sel.start, sel.end));
                this.setFocus(sel.start + diagramText.length + 10, sel.start + diagramText.length + 10);
                break;
            case 'gantt':
                var ganttText = sel.text;
                if (ganttText.length === 0) {
                    // ganttText = $($event.target).data('sample');
                    ganttText = 'gantt\n';
                    ganttText += 'dateFormat YYYY-MM-DD\n';
                    ganttText += 'section S1\n';
                    ganttText += 'T1: 2014-01-01, 9d\n';
                    ganttText += 'section S2\n';
                    ganttText += 'T2: 2014-01-11, 9d';
                    ganttText += 'section S3\n';
                    ganttText += 'T3: 2014-01-02, 9d';
                }
                change(this.getInsertText('\n```\n' + ganttText + '\n```\n', sel.start, sel.end));
                this.setFocus(sel.start + ganttText.length + 10, sel.start + ganttText.length + 10);
                break;
        }
        this.setTextareaHeight();
    };
    ThyEditorService.prototype.togglePreview = function () { };
    ThyEditorService.prototype.setTextareaHeight = function () {
        if (this.options.isHeightFull) {
            return;
        }
        var _height = this.textareaDom.scrollHeight;
        if (_height > this.options.maxHeight) {
            _height = this.options.maxHeight;
        }
        this.textareaDom.style.height = _height + 'px';
    };
    ThyEditorService.prototype.setTable = function (x, y, action) {
        this.tableOptions.tableActiveX = x;
        this.tableOptions.tableActiveY = y;
        this.tableOptions.table_action = action;
    };
    ThyEditorService.prototype.insertTable = function (change) {
        var cols = this.tableOptions.tableActiveY;
        var rows = this.tableOptions.tableActiveX + 1;
        var _header = this.getLocaleText('col');
        var _header_hr = '---';
        var _row = this.getLocaleText('row');
        for (var i = 0; i < cols; i++) {
            _header += '| ' + this.getLocaleText('col') + ' ';
            _header_hr += '| --- ';
            _row += '| ' + this.getLocaleText('row') + ' ';
        }
        var _str = '';
        for (var i = 0; i < rows; i++) {
            _str += _row + '\n';
        }
        var sample = _header + '\n' + _header_hr + '\n' + _str;
        var sel = this.getSelection();
        if (sel.text.length > 0) {
            this.clearSelection();
            sel = this.getSelection();
        }
        var _strHTML = '';
        if (this.isRowFirst(sel.start)) {
            _strHTML = this.getInsertText('\n' + sample + '\n\n', sel.start, sel.end);
            change(_strHTML);
            // this.insertText('\n' + sample + '\n\n', sel.start, sel.end);
            this.setFocus(sel.start + sample.length + 2, sel.start + sample.length + 2);
        }
        else {
            _strHTML = this.getInsertText('\n\n' + sample + '\n\n', sel.start, sel.end);
            change(_strHTML);
            // this.insertText('\n\n' + sample + '\n\n', sel.start, sel.end);
            this.setFocus(sel.start + sample.length + 4, sel.start + sample.length + 4);
        }
        change(_strHTML);
        this.tableOptions.table_action = false;
        this.setTextareaHeight();
    };
    ThyEditorService.prototype.clear = function () {
        this.toolbars = null;
        this.headers = null;
        this.tableOptions.tableMenu = null;
    };
    ThyEditorService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Renderer2])
    ], ThyEditorService);
    return ThyEditorService;
}());
export { ThyEditorService };
//# sourceMappingURL=editor.service.js.map