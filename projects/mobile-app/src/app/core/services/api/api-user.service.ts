import {Injectable} from '@angular/core';
import {AppConfigService} from "../platform/app-config.service";
import {HttpClient} from "@angular/common/http";
import {IUser} from "../../models/user.model";

@Injectable({
    providedIn: 'root'
})
export class ApiUserService {

    private readonly restUrl: string;

    constructor(appConfigService: AppConfigService, private http: HttpClient) {
        this.restUrl = appConfigService.getAttribute('restUrl');
    }

    public async authorize(code: string): Promise<IUser> {
        const body = {
            userName: code,
            password: code,
        }
        return await this.http.post<IUser>(`${this.restUrl}/api/auth/login`, body).toPromise();
    }

    public async fcmTokenRegister(token: string): Promise<unknown> {
        return await this.http.post<unknown>(`${this.restUrl}/api/User/firebase`,{ token }).toPromise();
    }
}
