
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { LoginComponent } from './../login/login.component';
import { UserInfoService } from './../../services/user-info.service';
import { Component } from '@angular/core';
import { IUserInfo } from '../../interfaces/user-info.interface';
import { UserInfo } from '../../models/user-info.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public userInfo: IUserInfo = new UserInfo();
  public password: string = '';
  public confirmPassword: string = '';
  public showUserNameError: boolean = false;
  public showPasswordError: boolean = false;
  public formIncompleteError: boolean = false;

  constructor(
    private userInfoService: UserInfoService,
    private modalRef: BsModalRef,
    private bsModalService: BsModalService
  ) { }

  public signup() {
    this.showUserNameError = false;
    this.showPasswordError = false;
    this.formIncompleteError = false;

    if (!this.userInfo.firstName || !this.userInfo.lastName || !this.userInfo.userName || !this.password) {
      this.formIncompleteError = true;
    } else if (this.password !== this.confirmPassword) {
      this.showPasswordError = true;
    } else {
      this.userInfoService.addUser(this.userInfo, btoa(this.password))
        .subscribe(() => {
          this.modalRef.hide();
          this.bsModalService.show(LoginComponent, {});
        }, () => {
          this.showUserNameError = true;
        });
    }
  }
  
}
