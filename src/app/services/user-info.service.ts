import {Injectable} from '@angular/core';
import {UserInfo} from '../defines/UserInfo';
import {Http} from "@angular/http";

const userInfoKey = 'userInfoList';

@Injectable()
export class UserInfoService {
  storage: Storage;
  user: UserInfo = null;
  userList: UserInfo[] = null;

  constructor(http: Http) {
    http.get('/assets/users.json')
      .map(res => res.json())
      .subscribe(data => console.log(data));

    this.storage = localStorage;
  }

  getUserList(): UserInfo[] {
    if (this.userList) {
      return this.userList;
    }

    return this.userList = JSON.parse(this.storage[userInfoKey])
        .map(data => new UserInfo(data));
  }

  getUser(id: string) {
    const userList = this.getUserList();
    return userList.find(user => user.id === id);
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
