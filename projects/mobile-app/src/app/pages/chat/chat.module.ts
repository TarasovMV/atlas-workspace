import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ChatPage} from './chat.page';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {AngularSvgIconModule} from 'angular-svg-icon';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        AngularSvgIconModule,
        [RouterModule.forChild([{path: '', component: ChatPage}])]
    ],
    declarations: [ChatPage]
})
export class ChatPageModule {
}
