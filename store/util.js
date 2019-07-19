import { META_KEY } from './types';
export function findAndCreateStoreMetadata(target) {
    if (!target.hasOwnProperty(META_KEY)) {
        var defaultMetadata = {
            actions: {},
            path: null,
            children: [],
            instance: null
        };
        target[META_KEY] = defaultMetadata;
    }
    return target[META_KEY];
}
//# sourceMappingURL=util.js.map