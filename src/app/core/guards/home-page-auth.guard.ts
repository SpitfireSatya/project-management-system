
import { RoutingService } from '@myApp/shared';
import { AuthenticationService } from '../services/authentication.service';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class HomePageAuthGuard implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public routingService: RoutingService) {}
  canActivate(): boolean {
    if (!this.authenticationService.isUserLoggedIn) {
      return true;
    } else {
      this.routingService.navigateTo('/task-list');
      return false;
    }
  }
}
