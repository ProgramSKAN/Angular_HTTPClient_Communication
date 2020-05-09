import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LogResponseInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`LogResponseInterceptor - ${req.url}`);

        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event.type === HttpEventType.Response) {
                        console.log(event.body);
                    }
                })
            );
    }
}