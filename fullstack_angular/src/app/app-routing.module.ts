import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { UserDataComponent } from './user-data/user-data.component';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'userList', component: UserListComponent },
  { path: 'addUser', component: UserFormComponent },
  { path: 'editUser/:id', component: UserFormComponent },
  { path: 'user/:id', component: UserDataComponent },
  { path: 'typeUserList', component: TypeUserListComponent },
  { path: 'addTypeUser', component: TypeUserFormComponent },
  { path: 'editTypeUser/:id', component: TypeUserFormComponent },
  { path: 'typeUserList/exists/:type', component: TypeUserListComponent }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
