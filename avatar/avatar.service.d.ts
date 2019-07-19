export declare abstract class ThyAvatarService {
    ignoreAvatarSrcPaths: string[];
    abstract avatarSrcTransform(src: string, size: number): string;
}
export declare class ThyDefaultAvatarService extends ThyAvatarService {
    avatarSrcTransform(src: string, size: number): string;
}
