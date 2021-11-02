import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularSvgIconModule} from 'angular-svg-icon';
import {StartPage} from './start.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        ReactiveFormsModule,
        RouterModule.forChild([{path: '', component: StartPage}])
    ],
    declarations: [StartPage]
})
export class StartPageModule {}
