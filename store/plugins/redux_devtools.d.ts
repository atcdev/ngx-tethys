export declare abstract class StorePlugin {
    abstract handleNewState(actionName: string, state: Readonly<object>): void;
    abstract isConnectSuccessed(): boolean;
}
export declare function tinyStateVersion(): string;
export declare class ReduxDevtoolsPlugin implements StorePlugin {
    private _devTools;
    _window: Window;
    constructor();
    handleNewState(actionName: string, state: object): void;
    isConnectSuccessed(): boolean;
}
declare function getReduxDevToolsPlugin(): any;
export default getReduxDevToolsPlugin;
