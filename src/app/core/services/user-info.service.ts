
import { Injectable } from '@angular/core';
import { IUserInfo } from '../interfaces/user-info.interface';
import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class UserInfoService {

  private _userCredentials: Array<{ userName: string, password: string }> = [
    {userName: 'admin', password: 'YWRtaW4='}
  ]
  private _userInfoList: { [key: string]: IUserInfo } = {
    admin: {
      userName: 'admin',
      firstName: 'John',
      lastName: 'Doe',
      accessGroup: 'admin'
    }
  };

  constructor() { }

  public validateUser(userName: string, password: string): Observable<IUserInfo> {
    const result = this._userCredentials.filter(user => user.userName === userName)[0];
    if (result && result.password === password) {
      console.log('userInfo', this._userInfoList[userName]);
      return of(this._userInfoList[userName]);
    } else {
      return throwError ('Username or password is incorrect');
    }
  }

  public addUser(userInfo: IUserInfo, password: string): Observable<boolean> {

    if (!this._userInfoList[userInfo.userName]) {
      this._userInfoList[userInfo.userName] = userInfo;
      this._userCredentials.push({ userName: userInfo.userName, password: password });
      return of(true);
    } else {
      return of(false);
    }

  }

}