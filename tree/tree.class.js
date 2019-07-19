import { helpers } from '../util';
var ThyTreeNode = /** @class */ (function () {
    function ThyTreeNode(node, parent, service) {
        if (parent === void 0) { parent = null; }
        var _this = this;
        this.level = 0;
        this.title = node.title;
        this.key = node.key || null;
        this.children = [];
        this.parentNode = parent;
        this.level = parent ? this.level + 1 : this.level;
        this.origin = node;
        this.isDisabled = node.disabled || false;
        this.isExpanded = node.expanded || false;
        this.isLoading = false;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.children.push(new ThyTreeNode(childNode, _this));
            });
        }
        this.service = service;
    }
    Object.defineProperty(ThyTreeNode.prototype, "treeService", {
        get: function () {
            if (this.service) {
                return this.service;
            }
            else if (this.parentNode) {
                return this.parentNode.treeService;
            }
        },
        enumerable: true,
        configurable: true
    });
    ThyTreeNode.prototype.setKey = function (key) {
        this.origin.key = key;
        this.key = key;
    };
    ThyTreeNode.prototype.setTitle = function (title) {
        this.origin.title = title;
        this.title = title;
    };
    ThyTreeNode.prototype.setExpanded = function (expanded) {
        this.origin.expanded = expanded;
        this.isExpanded = expanded;
    };
    ThyTreeNode.prototype.setLoading = function (loading) {
        this.isLoading = loading;
    };
    ThyTreeNode.prototype.getParentNode = function () {
        return this.parentNode;
    };
    ThyTreeNode.prototype.getChildren = function () {
        return this.children;
    };
    ThyTreeNode.prototype.addChildren = function (children, index) {
        var _this = this;
        if (index === void 0) { index = -1; }
        if (!helpers.isArray(children)) {
            children = [children];
        }
        (children || []).forEach(function (childNode, i) {
            if (index === -1) {
                _this.children.push(new ThyTreeNode(childNode, _this));
            }
            else {
                _this.children.splice(index + i, 0, new ThyTreeNode(childNode, _this, _this.treeService));
            }
        });
        this.origin.children = this.getChildren().map(function (n) { return n.origin; });
        this.setLoading(false);
        this.treeService.$statusChange.next({
            eventName: 'addChildren',
            node: this
        });
    };
    return ThyTreeNode;
}());
export { ThyTreeNode };
//# sourceMappingURL=tree.class.js.map