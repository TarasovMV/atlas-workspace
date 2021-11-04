import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsPotentialPage} from './tabs-potential.page';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        RouterModule.forChild([{path: '', component: TabsPotentialPage}]),
        SharedModule
    ],
    declarations: [
        TabsPotentialPage,
    ]
})
export class TabsPotentialPageModule {
}
