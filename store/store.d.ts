import { Observable, Observer, BehaviorSubject, Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
export declare class Store<T extends object> implements Observer<T>, OnDestroy {
    state$: BehaviorSubject<T>;
    apply_redux_tool: boolean;
    private _defaultStoreInstanceId;
    constructor(initialState: any);
    readonly snapshot: T;
    dispatch(type: string, payload?: any): Observable<any>;
    private _dispatch;
    select<TResult>(selector: (state: T) => TResult): Observable<TResult> | Observable<TResult>;
    next(state: T): void;
    error(error: any): void;
    complete(): void;
    subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    /**
     * set store new state
     *
     * @example
     * this.setState(newState);
     * this.setState({ users: produce(this.snapshot.users).add(user) });
     * this.setState((state) => {
     *    return {
     *        users: produce(state.users).add(user)
     *    }
     * });
     * @param fn
     */
    setState(fn: Partial<T> | ((newState: T) => Partial<T>)): void;
    getState(): T;
    ngOnDestroy(): void;
    /**
     * You can override this method if you want to give your container instance a custom id.
     * The returned id must be unique in the application.
     */
    getStoreInstanceId(): string;
    private _getClassName;
}