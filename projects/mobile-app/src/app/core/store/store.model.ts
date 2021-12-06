import {IManufacture} from './models/manufacture.model';
import {IIndicatorIdea} from './models/idea.model';
import {IIndicatorRestriction} from './models/restriction.model';
import {IIndicatorEvent} from './models/event.model';
import {IUnitFull} from './models/unit.model';

export interface IFactoryState {
    manufactures: IManufacture[];
    unit: IUnitFull;
    ideas: IIndicatorIdea[];
    events: IIndicatorEvent[];
    restrictions: IIndicatorRestriction[];
}

export interface IState {
    factory: IFactoryState;
}
