export interface ITextBlock {
    info: ITextBlockInfo[];
    count?: number;
    date?: string;
}

export interface ITextBlockInfo {
    type: TextBlockType;
    text: string;
}

export type TextBlockType = 'restriction' | 'potential' | 'default';
