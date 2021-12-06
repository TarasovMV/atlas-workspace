import {InjectionToken} from '@angular/core';
import {IAppConfig} from '../models';

export const APP_CONFIG: InjectionToken<IAppConfig> = new InjectionToken<IAppConfig>('app config token');
