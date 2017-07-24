import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {UserInfo} from '../../defines/UserInfo';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  id: number;
  private sub: any;

  @Input()
  info: UserInfo;
  editMode = false;

  @Output()
  done = new EventEmitter<UserInfo>();
  @Output()
  delete = new EventEmitter<UserInfo>();

  constructor(private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

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
    //this.editMode = this.info.isNew;
  }

}

