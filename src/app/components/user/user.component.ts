import {Component, OnInit, Input} from '@angular/core';
import {UserInfo} from '../../defines/UserInfo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  info: UserInfo;
  editMode = false;

  constructor() {}

  get modeIcon() {
    return this.editMode ? 'done' : 'mode_edit';
  }

  changeMode() {
    this.editMode = !this.editMode;
  }

  ngOnInit() {
    this.editMode = this.info.isNew;
  }
}
