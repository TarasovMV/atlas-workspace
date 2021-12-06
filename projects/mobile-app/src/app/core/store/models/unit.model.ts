import {IIndicatorIdea} from './idea.model';
import {IIndicatorEvent} from './event.model';
import {IIndicatorRestriction} from './restriction.model';
import {IUnitIndicator} from './indicator.model';

export interface IUnit {
    id: number;
    name: string;
    potential: number;
}

export interface IUnitFull extends IUnit {
    shortName: string;
    indicators: IUnitIndicator[];
}

export interface IUnitDto {
    id: number;
    name: string;
    shortName: string;
    manufactureId: number;
    unitIndicatorRestrictions: IIndicatorRestriction[];
    unitIndicatorEvents: IIndicatorEvent[];
    unitIndicatorIdeas: IIndicatorIdea[];
}
