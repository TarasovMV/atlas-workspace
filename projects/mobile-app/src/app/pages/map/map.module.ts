import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MapPage} from './map.page';
import {RouterModule} from "@angular/router";
import {PinchZoomModule} from 'ngx-pinch-zoom';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        [RouterModule.forChild([{path: '', component: MapPage}])],
        PinchZoomModule,
        AngularSvgIconModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [MapPage]
})
export class MapPageModule {
}
