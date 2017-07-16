import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';

import {UserInfoService} from './services/user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
