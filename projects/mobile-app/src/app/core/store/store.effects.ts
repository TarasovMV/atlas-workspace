import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {IState} from './store.model';
import {
    eventsLoad, eventsLoadSuccess,
    ideasLoad,
    ideasLoadSuccess,
    manufacturesLoad,
    manufacturesLoadSuccess,
    restrictionsLoad, restrictionsLoadSuccess, unitLoad, unitLoadSuccess
} from './store.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ApiFactoryService} from '../services/api/api-factory.service';

@Injectable()
export class StoreEffects {
    constructor(
        private actions$: Actions,
        private store: Store<IState>,
        private apiFactory: ApiFactoryService
    ) {}

    manufacturesLoad$ = createEffect(() => this.actions$.pipe(
        ofType(manufacturesLoad),
        switchMap(() => this.apiFactory.getManufactures()),
        map((manufactures) => ({type: manufacturesLoadSuccess.type, manufactures}))
    ));

    unitLoad$ = createEffect(() => this.actions$.pipe(
        ofType(unitLoad),
        switchMap((action) => this.apiFactory.getUnit(action.unitId)),
        map((unit) => ({type: unitLoadSuccess.type, unit}))
    ));

    ideasLoad$ = createEffect(() => this.actions$.pipe(
        ofType(ideasLoad),
        switchMap((action) => this.apiFactory.getIdeas(action.unitId)),
        map((ideas) => ({type: ideasLoadSuccess.type, ideas}))
    ));

    eventsLoad$ = createEffect(() => this.actions$.pipe(
        ofType(eventsLoad),
        switchMap((action) => this.apiFactory.getEvents(action.unitId)),
        map((events) => ({type: eventsLoadSuccess.type, events}))
    ));

    restrictionsLoad$ = createEffect(() => this.actions$.pipe(
        ofType(restrictionsLoad),
        switchMap((action) => this.apiFactory.getRestrictions(action.unitId)),
        map((restrictions) => ({type: restrictionsLoadSuccess.type, restrictions}))
    ));
}
