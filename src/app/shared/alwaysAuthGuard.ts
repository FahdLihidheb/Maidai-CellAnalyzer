import { CanActivate } from "@angular/router";
import { AuthService } from '../shared/user-service/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

    constructor(private _authService: AuthService) {

    }

    canActivate(): Promise<boolean> {
        return this._authService.isAuthenticated()
            .then(res => {
                return res;
            })
            .catch(err => {
                return false;
            })
    }
}