import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TabsIdeasPage} from './tabs-ideas.page';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        RouterModule.forChild([{path: '', component: TabsIdeasPage}]),
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        TabsIdeasPage,
    ]
})
export class TabsIdeasPageModule {
}
