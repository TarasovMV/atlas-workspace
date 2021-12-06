import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models/user.model";
import {APP_CONFIG} from '../../tokens';
import {IAppConfig} from '../../models';

@Injectable({
    providedIn: 'root'
})
export class ApiUserService {
    constructor(
        @Inject(APP_CONFIG) private readonly config: IAppConfig,
        private http: HttpClient
    ) {}

    public async authorize(code: string): Promise<IUser> {
        const body = {
            userName: code,
            password: code,
        }
        return await this.http.post<IUser>(`${this.config.restUrl}/api/auth/login`, body).toPromise();
    }

    public async fcmTokenRegister(token: string): Promise<unknown> {
        return await this.http.post<unknown>(`${this.config.restUrl}/api/User/firebase`,{ token }).toPromise();
    }
}
