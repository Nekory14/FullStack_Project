import { Component } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { TypeUser } from '../type-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] | undefined;
  types: TypeUser[] = [];

  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    })
  }

  editUser(id: number): void {
    console.log('Edit user clicked. User ID:', id);
    this.userService.getUserById(id).subscribe((user) => {
      console.log('User data retrieved for editing:', user);
      this.router.navigate(['/editUser', id], { state: {user} });

      this.userService.getTypes().subscribe(types => {
        this.types = types;
      })
    });
  }

  deleteUser(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(id).subscribe(() => {
        this.loadUsers();
        this.router.navigate(['/userList']);
      });
    }
  }

  sortUsers(field: string, order: 'asc' | 'desc') {
    if (order === 'asc') {
        this.users?.sort((a, b) => {
            if (field === 'type') {
                if (a.typeUser && b.typeUser) {
                    return a.typeUser.type.localeCompare(b.typeUser.type);
                }
            } else if (field === 'name') {
                if (a.name && b.name) {
                    return a.name.localeCompare(b.name);
                }
            } else if (field === 'firstName') {
              if (a.firstName && b.firstName) {
                  return a.firstName.localeCompare(b.firstName);
              }
            } else if (field === 'email') {
              if (a.email && b.email) {
                  return a.email.localeCompare(b.email);
              }
            }
            return 0;
        });
    } else if (order === 'desc') {
        this.users?.sort((a, b) => {
            if (field === 'type') {
                if (a.typeUser && b.typeUser) {
                    return b.typeUser.type.localeCompare(a.typeUser.type);
                }
            } else if (field === 'name') {
                if (a.name && b.name) {
                    return b.name.localeCompare(a.name);
                }
            } else if (field === 'firstName') {
              if (a.firstName && b.firstName) {
                  return b.firstName.localeCompare(a.firstName);
              }
            } else if (field === 'email') {
              if (a.email && b.email) {
                  return b.email.localeCompare(a.email);
              }
            }
            return 0;
        });
    }
  }

  sortByTypeASC() {
    this.sortUsers('type', 'asc');
  }

  sortByTypeDESC() {
      this.sortUsers('type', 'desc');
  }

  sortByNameASC() {
      this.sortUsers('name', 'asc');
  }

  sortByNameDESC() {
      this.sortUsers('name', 'desc');
  }

  sortByFirstNameASC() {
    this.sortUsers('firstName', 'asc');
  }

  sortByFirstNameDESC() {
      this.sortUsers('firstName', 'desc');
  }

  sortByEmailASC() {
      this.sortUsers('email', 'asc');
  }

  sortByEmailDESC() {
      this.sortUsers('email', 'desc');
  }

}
