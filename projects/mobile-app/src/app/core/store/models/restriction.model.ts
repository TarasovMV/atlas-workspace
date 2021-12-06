import {IIndicator} from './indicator.model';

export interface IRestriction {
    id: number;
    potential: number;
    restrictionDescription: string;
    potentialDescription: string;
    unitIndicatorRestrictionId: number;
}

export interface IIndicatorRestriction extends IIndicator {
    restrictions: IRestriction[];
}
