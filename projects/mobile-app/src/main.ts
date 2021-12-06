import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {APP_CONFIG} from './app/core/tokens';
import {IAppConfig} from './app/core/models';

if (environment.production) {
  enableProdMode();
}

fetch('assets/config.json')
    .then(res => res.json())
    .then((config: IAppConfig) =>
        platformBrowserDynamic([{provide: APP_CONFIG, useValue: config}])
            .bootstrapModule(AppModule)
            .catch((err) => console.error(err))
    );
