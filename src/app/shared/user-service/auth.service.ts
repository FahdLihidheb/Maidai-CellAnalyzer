import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { DevEnv } from '../config';
import { Doctor } from './Doctor';
import { promise } from 'protractor';

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
    private _SESSION_URL: string = DevEnv.SERVER + "maidai-solution/doctors/token";

    constructor(private _http: HttpClient) {

    }

    getCurrentToken() {
        return sessionStorage.getItem('token')
    }

    getCurrentSession(): Observable<Doctor> {
        return this._http.post<Doctor>(this._SESSION_URL, {}, {
            headers: {
                authorization: 'b ' + sessionStorage.getItem('token')
            }
        });
    }

    isAuthenticated(): Promise<boolean> {
        if (localStorage.getItem('token'))
            sessionStorage.setItem('token', localStorage.getItem('token'))
        return this._http.post<IAuthResponse>(this._ISAUTH_URL, {}, {
            headers: {
                authorization: 'b ' + sessionStorage.getItem('token')
            }
        }).toPromise()
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
            password: password,
            gender: user.gender,
            imagePath: user.imagePath
        }).toPromise()
            .then(res => {
                sessionStorage.setItem('token', res.token);
                return true;
            })
            .catch(err => {
                return false;
            })
    }

    login(email: string, password: string, rememberMe: boolean): Promise<boolean> {
        return this._http.post<ILoginResponce>(this._LOGIN_URL, {
            "email": email,
            "password": password
        }).toPromise()
            .then(res => {
                if (rememberMe) {
                    localStorage.setItem('token', res.token);
                    sessionStorage.setItem('token', res.token);
                }
                else {
                    sessionStorage.setItem('token', res.token);
                    console.log(res.token)
                }

                return true;
            })
            .catch(err => {
                localStorage.clear();
                return false;
            })
    }
}