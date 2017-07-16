import {Injectable} from '@angular/core';
import {UserInfo} from '../defines/UserInfo';

const userInfoKey = 'userInfoList';

@Injectable()
export class UserInfoService {
  storage: Storage;
  constructor() {
    this.storage = localStorage;
  }
  getUserList(): UserInfo[] {
    return JSON.parse(this.storage[userInfoKey]).map(data => new UserInfo(data));
  }

  saveUserList(userList: UserInfo[]) {
    userList.forEach(user => user.isNew = false);
    this.storage[userInfoKey] = JSON.stringify(userList);
  }
}
