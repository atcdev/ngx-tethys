import { Id } from '../typings';
export interface EntityAddOptions {
    prepend?: boolean;
}
export interface ProducerOptions {
    idKey?: string;
}
export declare class Producer<TEntity> {
    private idKey;
    private entities;
    constructor(entities: TEntity[], options?: ProducerOptions);
    /**
     * Add an entity or entities.
     *
     * @example
     * produce([users]).add(Entity);
     * produce([users]).add([Entity, Entity]);
     * produce([users]).add(Entity, { prepend: true });
     */
    add(entity: TEntity | TEntity[], addOptions?: EntityAddOptions): TEntity[];
    /**
     *
     * Update an entity or entities.
     *
     * @example
     * produce([users]).update(3, {
     *   name: 'New Name'
     * });
     *
     * produce([users]).update(3, entity => {
     *    return {
     *      ...entity,
     *      name: 'New Name'
     *    }
     *  });
     *
     * produce([users]).update([1,2,3], {
     *   name: 'New Name'
     * });
     */
    update(id: Id | Id[] | null, newStateFn: (entity: Readonly<TEntity>) => Partial<TEntity>): TEntity[];
    update(id: Id | Id[] | null, newState?: Partial<TEntity>): TEntity[];
    /**
     *
     * Remove one or more entities:
     *
     * @example
     * produce([users]).remove(5);
     * produce([users]).remove([1,2,3]);
     * produce([users]).remove(entity => entity.id === 1);
     */
    remove(id: Id | Id[]): TEntity[];
    remove(predicate: (entity: Readonly<TEntity>) => boolean): TEntity[];
}
export declare function produce<TEntity>(entities: TEntity[], options?: ProducerOptions): Producer<TEntity>;
