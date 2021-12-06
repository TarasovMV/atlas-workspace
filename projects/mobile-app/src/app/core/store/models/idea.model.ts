import {IIndicator} from './indicator.model';

export interface IIdea {
    id: number;
    ideaDescription: string;
    potential: number;
    unitIndicatorIdeaId: number;
    year: string;
}

export interface IIndicatorIdea extends IIndicator {
    ideas: IIdea[];
}
