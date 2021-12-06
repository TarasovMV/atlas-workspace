import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IState} from '../../core/store/store.model';
import {selectManufactures} from '../../core/store/store.selectors';
import {manufacturesLoad} from '../../core/store/store.actions';
import {Observable} from 'rxjs';
import {IManufacture} from '../../core/store/models/manufacture.model';
import {map} from 'rxjs/operators';
import {NavController} from '@ionic/angular';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-map',
    templateUrl: './map.page.html',
    styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
    public isLoaded$: Observable<boolean>;
    public control: FormControl = new FormControl([1]);
    private manufactures$: Observable<IManufacture[]>;

    constructor(
        private store: Store<IState>,
        private navCtrl: NavController,
    ) {
        this.manufactures$ = this.store.select(selectManufactures);
        this.isLoaded$ = this.manufactures$.pipe(map(x => !!x));
    }

    public ngOnInit(): void {
        this.manufactures$.subscribe(x => console.log('store', x));
        this.store.dispatch(manufacturesLoad());
    }

    public chooseUnit(id: number): void {
        this.navCtrl.navigateForward(`tabs?unitId=${id}`).then();
    }

    public openSettings(): void {
        this.navCtrl.navigateForward(`settings`).then();
    }

    public openChat(): void {
        this.navCtrl.navigateForward(`chat`).then();
    }
}
