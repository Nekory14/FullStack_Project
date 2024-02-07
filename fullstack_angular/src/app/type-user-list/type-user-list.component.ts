import { Component } from '@angular/core';
import { TypeUser } from '../type-user';
import { TypeUserService } from '../type-user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html',
  styleUrl: './type-user-list.component.css'
})
export class TypeUserListComponent {

  typeUsers: TypeUser[] | undefined;

  constructor(private typeUserService: TypeUserService, private router: Router) { }

  ngOnInit() {
    this.loadTypeUsers();
  }

  loadTypeUsers() {
    this.typeUserService.findAll().subscribe(data => {
      this.typeUsers = data;
    });
  }

  editTypeUser(id: number): void {
    console.log('Edit type user clicked. Type User ID:', id);
    this.router.navigate(['/editTypeUser', id]);
}

  deleteTypeUser(id: number) {
    if(confirm('Are you sure you want to delete this user?')) {
      this.typeUserService.deleteTypeUser(id).subscribe(() => {
        this.loadTypeUsers();
      });
    }
  }

  sortTypeUsers(field: string, order: 'asc' | 'desc') {
    if (order === 'asc') {
        this.typeUsers?.sort((a, b) => {
            if (field === 'id') {
                if (a.id && b.id) {
                    return a.id - b.id;
                }
            } else if (field === 'type') {
                if (a.type && b.type) {
                    return a.type.localeCompare(b.type);
                }
            }
            return 0;
        });
    } else if (order === 'desc') {
        this.typeUsers?.sort((a, b) => {
            if (field === 'id') {
                if (a.id && b.id) {
                    return b.id - a.id;
                }
            } else if (field === 'type') {
                if (a.type && b.type) {
                    return b.type.localeCompare(a.type);
                }
            }
            return 0;
        });
    }
  }

  sortByIdASC(){
    this.sortTypeUsers('id', 'asc');
  }

  sortByIdDESC(){
    this.sortTypeUsers('id', 'desc');
  }

  sortByTypeUserASC(){
    this.sortTypeUsers('type', 'asc');
  }

  sortByTypeUserDESC(){
    this.sortTypeUsers('type', 'desc');
  }

}
