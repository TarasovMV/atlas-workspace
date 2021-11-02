import {BehaviorSubject} from "rxjs";

export interface IPageTabDto {
    readonly route: PageTabType;
}

export interface IPageTab extends IPageTabDto {
    readonly name: string;
    readonly ripple$: BehaviorSubject<boolean>;
}

export type PageTabType = 'potential' | 'restrictions' | 'activity' | 'ideas';
