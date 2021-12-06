import {APP_HTTP} from './core/tokens';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {
    AuthenticationInterceptor,
    CacheInterceptor,
    ErrorInterceptor
} from './core/interceptors';

export default [
    {
        provide: APP_HTTP,
        useExisting: HttpClient,
        deps: [HttpClientModule],
    },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor,  multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor,  multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
]
