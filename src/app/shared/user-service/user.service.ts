import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { ILoginResponce } from './ILoginResponce';
import { DevEnv } from '../config';



@Injectable()
export class UserService {

    private _LOGIN_URL: string = DevEnv.SERVER + "maidai-news/login";

    constructor(private _http: HttpClient) {

    }

    login(email: string, password: string): Observable<ILoginResponce> {
        return this._http.post<ILoginResponce>(this._LOGIN_URL, {
            "email": email,
            "password": password
        })
    }
}