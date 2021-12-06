import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {SettingsPage} from './settings.page';
import {RouterModule} from "@angular/router";
import {AngularSvgIconModule} from 'angular-svg-icon';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        AngularSvgIconModule,
        [RouterModule.forChild([{path: '', component: SettingsPage}])],
        SharedModule,
        ReactiveFormsModule,
    ],
    declarations: [SettingsPage]
})
export class SettingsPageModule {
}
