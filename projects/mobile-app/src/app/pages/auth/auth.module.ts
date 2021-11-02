import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AuthPage} from './auth.page';
import {AngularSvgIconModule} from "angular-svg-icon";
import {RouterModule} from "@angular/router";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularSvgIconModule,
        ReactiveFormsModule,
        [RouterModule.forChild([{path: '', component: AuthPage}])]
    ],
    declarations: [AuthPage]
})
export class AuthPageModule {
}
