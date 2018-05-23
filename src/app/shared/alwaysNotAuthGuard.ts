import { CanActivate } from "@angular/router";
import { AuthService } from '../shared/user-service/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AlwaysNotAuthGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) {

    }

    canActivate(): Promise<boolean> {
        return this._authService.isAuthenticated()
            .then(res => {
                if(res) {
                    this._router.navigate(['dashboard']);
                    return false;
                }
                return true;
            })
            .catch(err => {
                return false;
            })
    }
}