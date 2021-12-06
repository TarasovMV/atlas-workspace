import {InjectionToken} from '@angular/core';
import {HttpClient} from '@angular/common/http';

/**
 * @description Global HttpClient token for provide to use Global Interceptors
 */
export const APP_HTTP: InjectionToken<HttpClient> = new InjectionToken<HttpClient>('Global HttpClient');
