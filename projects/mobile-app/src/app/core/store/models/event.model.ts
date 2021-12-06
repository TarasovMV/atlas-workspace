import {IIndicator} from './indicator.model';

export interface IEvent {
    id: number;
    eventDescription: string;
    potential: number;
    unitIndicatorEventId: number;
    year: string;
}

export interface IIndicatorEvent extends IIndicator {
    events: IEvent[];
}
