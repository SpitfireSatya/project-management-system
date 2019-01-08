
import { BsModalRef } from 'ngx-bootstrap/modal';
import { RoutingService } from './../../../shared/services/routing/routing.service';
import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public userName: string;
  public password: string;
  public showError: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private routingService: RoutingService,
    private modalRef: BsModalRef
  ) { }

  public login() {
    this.showError = false
    this.authenticationService.login(this.userName, btoa(this.password))
      .subscribe(() => {
        this.modalRef.hide();
        this.routingService.navigateTo('task-list');
      }, () => {
        this.showError = true;
      });
  }
  
}
