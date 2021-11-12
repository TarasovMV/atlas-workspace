import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from "@angular/router";
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {appConfigInit, AppConfigService} from './core/services/platform/app-config.service';

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
    providers: [
        { provide: APP_INITIALIZER, useFactory: appConfigInit, deps: [AppConfigService], multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
