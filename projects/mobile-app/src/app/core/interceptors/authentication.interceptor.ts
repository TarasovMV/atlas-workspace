import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from "../services/data/token.service";
import {delay} from 'rxjs/operators';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    constructor(private tokenService: TokenService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('api')) {
            return next.handle(req);
        }
        const cloned = req.clone({
            headers: req.headers.append(
                'Authorization', `Bearer ${this.tokenService.token}`
            )
        });
        return next.handle(cloned).pipe();
    }
}
