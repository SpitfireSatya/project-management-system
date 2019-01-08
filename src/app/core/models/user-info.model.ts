
import { IUserInfo } from "../interfaces/user-info.interface";

export class UserInfo implements IUserInfo {
  constructor(
    public firstName: string = '',
    public lastName: string = '',
    public userName: string = '',
    public accessGroup: string = 'user'
  ) { }
}
