import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
// import { StorageService } from '../../shared/local-storage/local-storage.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class AuthService {

    // private _loginApiUrl = `${environment.API_HOST}${environment.API_NON_VERSIONED}/login`;
    redirectUrl = '';

    constructor(private _http: HttpClient) {}

    // postLogin(loginDetails) {
    //     return this._http.post( this._loginApiUrl, JSON.stringify( loginDetails ))
    //                 .catch(error => throwError(error));
    // }

    isLoggedIn() {
        return false; // !!this._storage.get('isAuthenticated');
    }

}
