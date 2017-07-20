import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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

  @Output()
  done = new EventEmitter<UserInfo>();
  @Output()
  delete = new EventEmitter<UserInfo>();

  constructor() {}

  get modeIcon() {
    return this.editMode ? 'done' : 'mode_edit';
  }

  changeMode() {
    if (this.editMode) {
      this.done.emit(this.info);
    }

    this.editMode = !this.editMode;
  }

  onDelete() {
    this.delete.emit(this.info);
  }

  ngOnInit() {
    this.editMode = this.info.isNew;
  }
}
