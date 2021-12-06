import {Inject, Injectable} from '@angular/core';
import {APP_CONFIG} from '../../tokens';
import {IAppConfig} from '../../models';
import {Observable, of} from 'rxjs';
import {IManufacture} from '../../store/models/manufacture.model';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {IIndicatorIdea} from '../../store/models/idea.model';
import {IUnitDto, IUnitFull} from '../../store/models/unit.model';
import {IIndicatorEvent} from '../../store/models/event.model';
import {IIndicatorRestriction} from '../../store/models/restriction.model';

@Injectable({
    providedIn: 'root'
})
export class ApiFactoryService {
    constructor(
        @Inject(APP_CONFIG) private config: IAppConfig,
        private http: HttpClient,
    ) {}

    public getManufactures(): Observable<IManufacture[]> {
        return this.http.get<IManufacture[]>(`${this.config.restUrl}/api/Manufacture/mobile`).pipe(
            catchError(() => of([]))
        );
    }

    public getUnit(unitId: number): Observable<IUnitFull> {
        return this.http.get<IUnitFull>(`${this.config.restUrl}/api/Unit/${unitId}/mobile`).pipe();
    }

    public getIdeas(unitId: number): Observable<IIndicatorIdea[]> {
        return this.http.get<IUnitDto>(`${this.config.restUrl}/api/Idea/mobile/${unitId}`).pipe(
            map(res => res?.unitIndicatorIdeas ?? []),
            catchError(() => of([]))
        );
    }

    public getEvents(unitId: number): Observable<IIndicatorEvent[]> {
        return this.http.get<IUnitDto>(`${this.config.restUrl}/api/Event/mobile/${unitId}`).pipe(
            map(res => res?.unitIndicatorEvents ?? []),
            catchError(() => of([]))
        );
    }

    public getRestrictions(unitId: number): Observable<IIndicatorRestriction[]> {
        return this.http.get<IUnitDto>(`${this.config.restUrl}/api/Restriction/mobile/${unitId}`).pipe(
            map(res => res?.unitIndicatorRestrictions ?? []),
            catchError(() => of([]))
        );
    }
}
