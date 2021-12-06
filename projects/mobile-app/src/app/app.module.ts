import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {IonicModule} from '@ionic/angular';
import {AngularSvgIconModule} from "angular-svg-icon";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from './app-routing.module';
import APP_PROVIDERS from './app.providers';
import {StoreModule} from '@ngrx/store';
import {reducers} from './core/store/store.reducers';
import {EffectsModule} from '@ngrx/effects';
import {StoreEffects} from './core/store/store.effects';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IonicModule.forRoot(),
        AngularSvgIconModule.forRoot(),
        HttpClientModule,
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([StoreEffects])
    ],
    providers: [APP_PROVIDERS],
    bootstrap: [AppComponent]
})

export class AppModule {
}
