import {Component, OnInit} from '@angular/core';
import {UserInfo} from '../../defines/UserInfo';
import {ActivatedRoute} from '@angular/router';
import {UserInfoService} from '../../services/user-info.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  info: UserInfo;

  constructor(route: ActivatedRoute, userInfoService: UserInfoService) {
    route.params
      .map(params => params.id)
      .subscribe(id => this.info = userInfoService.getUser(id));
  }

  ngOnInit() {
    //this.editMode = this.info.isNew;
  }

}

