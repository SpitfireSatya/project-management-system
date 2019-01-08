import { RoutingService } from './../../../shared/services/routing/routing.service';
import { SignupComponent } from './../signup/signup.component';

import { LoginComponent } from './../login/login.component';
import { AuthenticationService } from './../../services/authentication.service';

import { Component } from '@angular/core';
import { IUserInfo } from '../../interfaces/user-info.interface';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  public isUserLoggedIn: boolean;
  public userInfo: IUserInfo;

  constructor(
    private authenticationService: AuthenticationService,
    private bsModalService: BsModalService,
    private routingService: RoutingService
  ) {
    this.authenticationService.isUserLoggenIn$.subscribe((isUserLoggedIn: boolean) => {
      this.isUserLoggedIn = isUserLoggedIn;
    });
    this.authenticationService.loggedInUserInfo$.subscribe((userInfo: IUserInfo) => {
      this.userInfo = userInfo;
    })
  }

  public login() {
    this.bsModalService.show(LoginComponent, {});
  }

  public signup() {
    this.bsModalService.show(SignupComponent, {});
  }

  public logOut() {
    this.authenticationService.logOut();
    this.routingService.navigateTo('/');
  }

}
