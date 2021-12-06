import {IFactoryState, IState} from './store.model';
import {Action, ActionReducerMap, createReducer, on} from '@ngrx/store';
import {
    eventsLoadSuccess,
    ideasLoadSuccess,
    manufacturesLoadSuccess,
    restrictionsLoadSuccess,
    unitLoadSuccess
} from './store.actions';

const initialState: IFactoryState = {
    manufactures: null,
    unit: null,
    ideas: null,
    events: null,
    restrictions: null,
}

export const factoryReducer = (state: IFactoryState, action: Action) => _factoryReducer(state, action);

// tslint:disable-next-line:variable-name
const _factoryReducer = createReducer(
    initialState,
    on(manufacturesLoadSuccess, (state, {manufactures}) => {
        return {...state, manufactures};
    }),
    on(unitLoadSuccess, (state, {unit}) => {
        return {...state, unit};
    }),
    on(ideasLoadSuccess, (state, {ideas}) => {
        return {...state, ideas};
    }),
    on(eventsLoadSuccess, (state, {events}) => {
        return {...state, events};
    }),
    on(restrictionsLoadSuccess, (state, {restrictions}) => {
        return {...state, restrictions};
    }),
);


export const reducers: ActionReducerMap<IState> = {
    factory: factoryReducer,
};
