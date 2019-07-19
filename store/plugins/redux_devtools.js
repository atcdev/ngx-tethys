var StorePlugin = /** @class */ (function () {
    function StorePlugin() {
    }
    return StorePlugin;
}());
export { StorePlugin };
export function tinyStateVersion() {
    return 'v0.6.0';
}
var ReduxDevtoolsPlugin = /** @class */ (function () {
    function ReduxDevtoolsPlugin() {
        this._devTools = null;
        this._window = window;
        if (this._window == null) {
            return;
        }
        var globalDevtools = this._window['__REDUX_DEVTOOLS_EXTENSION__'] ||
            this._window['devToolsExtension'];
        if (!globalDevtools) {
            console.log("\u672A\u5B89\u88C5Chrome\u6D4F\u89C8\u5668\u7684\u62D3\u5C55\u63D2\u4EF6: Redux DevTools.");
            console.log("\u63D2\u4EF6\u4E0B\u8F7D\u5730\u5740: https://www.chromefor.com/redux-devtools_v2-17-0/");
            return;
        }
        this._devTools = globalDevtools.connect({
            name: "NgxStore " + tinyStateVersion()
        });
    }
    ReduxDevtoolsPlugin.prototype.handleNewState = function (actionName, state) {
        if (this.isConnectSuccessed()) {
            this._devTools.send(actionName, state);
        }
    };
    ReduxDevtoolsPlugin.prototype.isConnectSuccessed = function () {
        if (this._devTools === null) {
            return false;
        }
        return true;
    };
    return ReduxDevtoolsPlugin;
}());
export { ReduxDevtoolsPlugin };
function getReduxDevToolsPlugin() {
    if (!window["___ReduxDevtoolsPlugin___"]) {
        window["___ReduxDevtoolsPlugin___"] = new ReduxDevtoolsPlugin();
    }
    return window["___ReduxDevtoolsPlugin___"];
}
export default getReduxDevToolsPlugin;
//# sourceMappingURL=redux_devtools.js.map