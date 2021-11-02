import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsActivityPage} from './tabs-activity.page';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        RouterModule.forChild([{path: '', component: TabsActivityPage}]),
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        TabsActivityPage,
    ]
})
export class TabsActivityPageModule {}
