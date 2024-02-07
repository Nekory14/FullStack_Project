import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { UserServiceService } from './user-service.service';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { TypeUserService } from './type-user.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserDataComponent } from './user-data/user-data.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    TypeUserListComponent,
    TypeUserFormComponent,
    UserDataComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserServiceService, TypeUserService, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
