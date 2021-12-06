import {createAction, props} from '@ngrx/store';
import {IManufacture} from './models/manufacture.model';
import {IIndicatorIdea} from './models/idea.model';
import {IIndicatorEvent} from './models/event.model';
import {IIndicatorRestriction} from './models/restriction.model';
import {IUnitFull} from './models/unit.model';

export const manufacturesLoad = createAction('[Manufactures] Load');
export const manufacturesLoadSuccess = createAction('[Manufactures] LoadSuccess', props<{ manufactures: IManufacture[] }>());

export const unitLoad = createAction('[Unit] Load', props<{ unitId: number }>());
export const unitLoadSuccess = createAction('[Unit] LoadSuccess', props<{ unit: IUnitFull }>());

export const ideasLoad = createAction('[Ideas] Load', props<{ unitId: number }>());
export const ideasLoadSuccess = createAction('[Ideas] LoadSuccess', props<{ ideas: IIndicatorIdea[] }>());

export const eventsLoad = createAction('[Events] Load', props<{ unitId: number }>());
export const eventsLoadSuccess = createAction('[Events] LoadSuccess', props<{ events: IIndicatorEvent[] }>());

export const restrictionsLoad = createAction('[Restrictions] Load', props<{ unitId: number }>());
export const restrictionsLoadSuccess = createAction('[Restrictions] LoadSuccess', props<{ restrictions: IIndicatorRestriction[] }>());
