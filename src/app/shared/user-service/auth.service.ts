import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { Doctor } from './Doctor';
import { promise } from 'protractor';
import { Session } from '../Session';

interface ILoginResponce {
    message: string;
    user: Doctor;
    token: string;
}

interface IAuthResponse {
    'message': string
}

interface IRegisterResponse {
    message: string,
    user: Doctor,
    token: string
}

@Injectable()
export class AuthService {

    private _LOGIN_URL: string = DevEnv.SERVER + "maidai-solution/login";
    private _ISAUTH_URL: string = DevEnv.SERVER + 'maidai/checkAuth';
    private _REGISTER_URL: string = DevEnv.SERVER + "maidai-solution/register";

    constructor(private _http: HttpClient) {

    }

    isAuthenticated(): Promise<boolean> {
        return this._http.post<IAuthResponse>(this._ISAUTH_URL, {}, {
            headers: {
                authorization: 'b ' + localStorage.getItem('token')
            }
        })
            .toPromise()
            .then(res => {
                if (res.message == 'Auth successful') return true;
                return false;
            })
            .catch(err => {
                return false;
            });
    }

    register(user: Doctor, password: string): Promise<boolean> {
        return this._http.post<IRegisterResponse>(this._REGISTER_URL, {
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            profession: user.profession,
            phonenumber: user.phonenumber,
            address: user.address,
            password: password
        }).toPromise()
            .then(res => {
                localStorage.setItem('token', res.token);
                Session.getInstance(res.user);
                return true;
            })
            .catch(err => {
                return false;
            })
    }

    login(email: string, password: string): Promise<boolean> {
        return this._http.post<ILoginResponce>(this._LOGIN_URL, {
            "email": email,
            "password": password
        }).toPromise()
            .then(res => {
                localStorage.setItem('token', res.token);
                Session.getInstance(res.user);
                return true;
            })
            .catch(err => {
                return false;
            })
    }
}