import {createSelector} from '@ngrx/store';
import {IFactoryState, IState} from './store.model';

const selectFactory = (state: IState) => state.factory;

export const selectManufactures = createSelector(selectFactory, (x: IFactoryState) => x.manufactures);
export const selectIdeas = createSelector(selectFactory, (x: IFactoryState) => x.ideas);
export const selectEvents = createSelector(selectFactory, (x: IFactoryState) => x.events);
export const selectRestrictions = createSelector(selectFactory, (x: IFactoryState) => x.restrictions);
export const selectUnit = createSelector(selectFactory, (x: IFactoryState) => x.unit);
