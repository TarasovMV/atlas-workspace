import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { IPageTab, PageTabType } from './tabs.model';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.page.html',
    styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
    public currentTab$: BehaviorSubject<PageTabType> = new BehaviorSubject<PageTabType>('potential');

    public readonly tabs: IPageTab[] = [
        {
            route: 'potential',
            name: 'Потенциал',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'restrictions',
            name: 'Ограничения',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'activity',
            name: 'Мероприятия',
            ripple$: new BehaviorSubject<boolean>(false),
        },
        {
            route: 'ideas',
            name: 'Идеи',
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
        private navCtrl: NavController
    ) { }

    public ngOnInit(): void {}

    public selectTab(tab: IPageTab): void {
        tab.ripple$.next(true);
        setTimeout(() => tab.ripple$?.next(false), 500);
        this.navCtrl.navigateRoot(this.tabsRouting[tab.route] ?? this.tabsRouting[this.currentTab$.value]).then();
    }

    public routing(tab: IPageTab): void {
        this.currentTab$.next(tab.route);
    }

    public tabTrack(index: number, el: IPageTab): string {
        return el.route;
    }
}
