import {Injectable} from '@angular/core';
import {UserInfo} from '../defines/UserInfo';

const userInfoKey = 'userInfoList';

@Injectable()
export class UserInfoService {
  storage: Storage;
  userList: UserInfo[] = null;

  constructor() {
    this.storage = localStorage;
  }

  getUserList(): UserInfo[] {
    if (this.userList) {
      return this.userList;
    }

    return this.userList = JSON.parse(this.storage[userInfoKey])
        .map(data => new UserInfo(data));
  }

  saveUserList(userList: UserInfo[]) {
    this.userList = userList;
    this.storage[userInfoKey] = JSON.stringify(userList);
  }

  saveUser(user: UserInfo) {
    const userList = this.userList;
    const index = userList.findIndex(u => u.id === user.id);
    userList.splice(index, 1, user);

    this.saveUserList(userList);
  }

  deleteUser(user: UserInfo) {
    const userList = this.userList;
    const index = userList.findIndex(u => u.id === user.id);
    userList.splice(index, 1);

    this.saveUserList(userList);
  }
}
