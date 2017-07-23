import {Component} from '@angular/core';
import {UserInfo} from './defines/UserInfo';
import {UserInfoService} from './services/user-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: UserInfo[];

  constructor(private userInfoService: UserInfoService) {
    this.users = userInfoService.getUserList();
  }

  saveUserList() {
    this.userInfoService.saveUserList(this.users);
  }

  addNewUser() {
    this.users.push(new UserInfo({name: '', surname: '', age: null, isNew: true}));
  }

  saveUser(userInfo: UserInfo) {
    this.userInfoService.saveUser(userInfo);
  }

  deleteUser(userInfo: UserInfo) {
    this.userInfoService.deleteUser(userInfo);
  }
}
