import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable()

export class CustomHttpInterceptor implements HttpInterceptor {


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = request.headers
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${localStorage.get(environment.token)}`)
            .set('Access-Control-Allow-Origin', '*');

        // if ((<any>window).Echo.socketId()) {
            // headers.set('X-Socket-ID', (<any>window).Echo.socketId());
        // }

        const clonedReq = request.clone({ headers });

        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                // this.authenticationService.logout();
                // location.reload(true);
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
