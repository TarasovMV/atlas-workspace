import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {MapPage} from './map.page';
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        [RouterModule.forChild([{path: '', component: MapPage}])]
    ],
    declarations: [MapPage]
})
export class AuthPageModule {
}
