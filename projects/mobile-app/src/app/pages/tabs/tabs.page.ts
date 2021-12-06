import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {BehaviorSubject, Observable} from 'rxjs';
import { IPageTab, PageTabType } from './tabs.model';
import {ActivatedRoute} from '@angular/router';
import {IState} from '../../core/store/store.model';
import {Store} from '@ngrx/store';
import {unitLoad} from '../../core/store/store.actions';
import {TabsBase} from './classes/tabs.base';
import {IUnitFull} from '../../core/store/models/unit.model';
import {selectUnit} from '../../core/store/store.selectors';
import {filter, map} from 'rxjs/operators';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage extends TabsBase implements OnInit {
    public currentTab$: BehaviorSubject<PageTabType> = new BehaviorSubject<PageTabType>('potential');
    public info$: Observable<IUnitFull>;
    public isLoad$: Observable<boolean>;
    public title$: Observable<string>;

    public readonly tabs: IPageTab[] = [
        {
            route: 'potential',
            name: 'Диаграмма',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'restrictions',
            name: 'Ограничения',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'activity',
            name: 'ДУ',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'ideas',
            name: 'Потенциал',
            ripple$: new BehaviorSubject<boolean>(false),
        },
    ];

    private readonly tabsRouting: { [key in PageTabType]: string } = {
        potential: 'tabs/potential',
        restrictions: 'tabs/restrictions',
        activity: 'tabs/activity',
        ideas: 'tabs/ideas',
    };

    constructor(
        private navCtrl: NavController,
        private route: ActivatedRoute,
        private store: Store<IState>,
    ) {
        super(route);
        this.info$ = this.store.select(selectUnit);
        this.isLoad$ = this.info$.pipe(map(x => !!x));
        this.title$ = this.info$.pipe(filter(x => !!x), map(x => x?.shortName));
    }

    public ngOnInit(): void {
        this.store.dispatch(unitLoad({unitId: this.unitId}));
    }

    public selectTab(tab: IPageTab): void {
        tab.ripple$.next(true);
        setTimeout(() => tab.ripple$?.next(false), 500);
        const queryParams = this.route.snapshot.queryParams;
        this.navCtrl.navigateForward(this.tabsRouting[tab.route] ?? this.tabsRouting[this.currentTab$.value], {queryParams, animated: false}).then();
    }

    public routing(tab: IPageTab): void {
        this.currentTab$.next(tab.route);
    }

    public tabTrack(index: number, el: IPageTab): string {
        return el.route;
    }

    public back(): void {
        this.navCtrl.navigateRoot('map').then();
    }
}
