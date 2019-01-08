
import { RoutingService } from '@myApp/shared';
import { AuthenticationService } from './../../core/services/authentication.service';

import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class TaskListAuthGuard implements CanActivate {
  constructor(public authenticationService: AuthenticationService, public routingService: RoutingService) {}
  canActivate(): boolean {
    if (this.authenticationService.isUserLoggedIn) {
      return true;
    } else {
      this.routingService.navigateTo('/');
      return false;
    }
  }
}
