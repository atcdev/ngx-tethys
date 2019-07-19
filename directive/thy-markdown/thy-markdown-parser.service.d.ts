export declare abstract class ThyMarkdownParserService {
    abstract setEmoJies(): {
        emojis: any[];
        getImageSrc: string;
        className: string;
    };
    abstract filterHTML(html: string): string;
}
export declare class ThyDefaultMarkdownParserService extends ThyMarkdownParserService {
    setEmoJies(): {
        emojis: any[];
        getImageSrc: string;
        className: string;
    };
    filterHTML(html: string): string;
}
