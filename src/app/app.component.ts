import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterEvent, Router } from '@angular/router';
import { LoadingOverlayService } from './shared/services/loading-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Eventually';


  /**
   *
   */
  constructor( private loadingOverlayService:LoadingOverlayService,
    private router:Router) {

      this.router.events.subscribe((event) => {
        this.navigationInterceptor(event as RouterEvent);
      });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loadingOverlayService.showLoader();
    }
    if (event instanceof NavigationEnd) {
      this.loadingOverlayService.hideLoader();
    }
    if (event instanceof NavigationCancel) {
      this.loadingOverlayService.hideLoader();
    }
    if (event instanceof NavigationError) {
      this.loadingOverlayService.hideLoader();
    }
  }
}

