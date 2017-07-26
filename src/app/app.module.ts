import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {UserComponent} from './components/user/user.component';

import {UserInfoService} from './services/user-info.service';
import {NbComponentsModule} from './nb-components/nb-components.module';

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import {HttpModule} from '@angular/http';



const appRoutes: Routes = [
  {
    path: 'home' ,
    component: UserListComponent
  },
  {
    path: 'home/user/:id',
    component: UserInfoComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NbComponentsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [UserInfoService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
