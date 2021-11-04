import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {ChatPage} from './chat.page';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        IonicModule,
        [RouterModule.forChild([{path: '', component: ChatPage}])]
    ],
    declarations: [ChatPage]
})
export class AuthPageModule {
}
