import { Store } from './store';
import { Id, PaginationInfo } from './types';
import { Observable } from 'rxjs';
export interface EntityStoreOptions {
    idKey: string;
}
export interface EntityAddOptions {
    prepend?: boolean;
    autoGotoLastPage?: boolean;
}
export interface EntityState<TEntity> {
    pageIndex: number;
    pagination: PaginationInfo;
    entities: TEntity[];
    [key: string]: any;
}
export declare class EntityStore<TState extends EntityState<TEntity>, TEntity> extends Store<TState> {
    protected options: EntityStoreOptions;
    private resetPagination;
    private increasePagination;
    private decreasePagination;
    readonly entities: TEntity[];
    readonly entities$: Observable<TEntity[]>;
    constructor(initialState?: {
        pageIndex: number;
        entities: TEntity[];
    }, options?: EntityStoreOptions);
    /**
     *
     * Replace current collection with provided collection
     *
     * @example
     * this.store.initialize([Entity, Entity]);
     *
     */
    initialize(entities: TEntity[], pagination: PaginationInfo): void;
    /**
     * Add an entity or entities to the store.
     *
     * @example
     * this.store.add(Entity);
     * this.store.add([Entity, Entity]);
     * this.store.add(Entity, { prepend: true });
     */
    add(entity: TEntity | TEntity[], addOptions?: EntityAddOptions): void;
    /**
     *
     * Update an entity or entities in the store.
     *
     * @example
     * this.store.update(3, {
     *   name: 'New Name'
     * });
     *
     *  this.store.update(3, entity => {
     *    return {
     *      ...entity,
     *      name: 'New Name'
     *    }
     *  });
     *
     * this.store.update([1,2,3], {
     *   name: 'New Name'
     * });
     */
    update(id: Id | Id[] | null, newStateFn: ((entity: Readonly<TEntity>) => Partial<TEntity>)): void;
    update(id: Id | Id[] | null, newState?: Partial<TEntity>): void;
    /**
     *
     * Remove one or more entities from the store:
     *
     * @example
     * this.store.remove(5);
     * this.store.remove([1,2,3]);
     * this.store.remove(entity => entity.id === 1);
     */
    remove(id: Id | Id[]): void;
    remove(predicate: (entity: Readonly<TEntity>) => boolean): void;
    trackBy(_index: number, entity: TEntity): any;
    clear(): void;
}
