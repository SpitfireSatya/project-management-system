
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserInfo } from '../interfaces/user-info.interface';
import { UserInfoService } from './user-info.service';


@Injectable()
export class AuthenticationService {

  private _isUserLoggedIn: boolean = false;
  private _loggedInUserInfo: IUserInfo = undefined;
  private _isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(this._isUserLoggedIn);
  private _loggedInUserInfo$: BehaviorSubject<IUserInfo> = new BehaviorSubject(this._loggedInUserInfo);

  constructor(private userInfoService: UserInfoService) { }

  public get isUserLoggedIn() {
    return this._isUserLoggedIn;
  }

  public get isUserLoggenIn$() {
    return this._isUserLoggedIn$.asObservable();
  }

  public get loggedInUserInfo() {
    return Object.assign({}, this._loggedInUserInfo);
  }

  public get loggedInUserInfo$() {
    return this._loggedInUserInfo$;
  }

  public login(userName: string, password: string) {
    return this.userInfoService.validateUser(userName, password)
      .pipe(map((userInfo: IUserInfo) => {
        this._isUserLoggedIn = true;
        this._loggedInUserInfo = userInfo;
        this._isUserLoggedIn$.next(this._isUserLoggedIn);
        this._loggedInUserInfo$.next(userInfo);
        return;
      }));
  }

  public logOut() {
    this._isUserLoggedIn = false;
    this._loggedInUserInfo = undefined;
    this._isUserLoggedIn$.next(this._isUserLoggedIn);
    this._loggedInUserInfo$.next(undefined);
    return of();
  }

}