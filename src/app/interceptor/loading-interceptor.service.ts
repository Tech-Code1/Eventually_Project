import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingOverlayService } from '../shared/services/loading-overlay.service';

@Injectable({
  providedIn: 'root'
})
export class LoadingInterceptorService implements HttpInterceptor {

  constructor( private loadingOverlayService: LoadingOverlayService) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
    ): Observable<HttpEvent<any>> {
    this.loadingOverlayService.showLoader();
    let request = next.handle(req)
    let alreadyHidden = false;

    return request.pipe(
      tap(
        (event) => {
      if(event instanceof HttpResponse){
        if(!alreadyHidden) {
          this.loadingOverlayService.hideLoader();
          alreadyHidden = true;
        }
      }
    },
    (error )=>{
      if(error instanceof HttpErrorResponse){
        if(!alreadyHidden){
          this.loadingOverlayService.hideLoader()
          alreadyHidden = true;
        }
        throwError(error);
      }
    }, () => {
      if (!alreadyHidden) {
        this.loadingOverlayService.hideLoader();
        alreadyHidden = true;
      }
    }
    )
    )
  }
}
