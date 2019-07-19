var ActionState = /** @class */ (function () {
    function ActionState() {
    }
    ActionState.changeAction = function (actionName) {
        this.actionName = actionName;
    };
    ActionState.getActionName = function () {
        return this.actionName;
    };
    ActionState.actionName = '';
    return ActionState;
}());
export { ActionState };
//# sourceMappingURL=action-state.js.map