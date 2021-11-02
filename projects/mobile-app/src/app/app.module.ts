import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from "@angular/router";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
        IonicModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'start',
                pathMatch: 'full',
            },
            {
                path: 'tabs',
                loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
            },
            {
                path: 'auth',
                loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthPageModule),
            },
            {
                path: 'start',
                loadChildren: () => import('./pages/start/start.module').then(m => m.StartPageModule),
            },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
