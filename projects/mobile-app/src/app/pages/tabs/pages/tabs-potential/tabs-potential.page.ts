import {Component, OnInit} from '@angular/core';
import {IPageTabDto, PageTabType} from "../../tabs.model";
import {TabsBase} from '../../classes/tabs.base';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {IState} from '../../../../core/store/store.model';
import {unitLoad} from '../../../../core/store/store.actions';
import {selectUnit} from '../../../../core/store/store.selectors';
import {Observable} from 'rxjs';
import {IUnitFull} from '../../../../core/store/models/unit.model';
import {filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-tabs-potential',
    templateUrl: './tabs-potential.page.html',
    styleUrls: ['./tabs-potential.page.scss'],
})
export class TabsPotentialPage extends TabsBase implements OnInit, IPageTabDto {
    public route: PageTabType = 'potential';
    public potential$: Observable<number>;

    constructor(
        private store: Store<IState>,
        router: ActivatedRoute,
    ) {
        super(router);
        const info$ = this.store.select(selectUnit);
        this.potential$ = info$.pipe(filter(x => !!x), map(x => x.potential));
    }

    ngOnInit(): void {
        this.store.dispatch(unitLoad({unitId: this.unitId}));
    }
}
