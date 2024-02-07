import { Component, Type } from '@angular/core';
import { User } from './../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { TypeUser } from '../type-user';
import { TypeUserService } from '../type-user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  user: User = new User();
  types: TypeUser[] = [];
  selectedType: TypeUser | null = null;
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService, private typeUserService: TypeUserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.loadTypes();

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.isEditMode = true;
      this.userService.getUserById(+userId).subscribe(user => {
      this.user = user;
      if(user.typeUser && user.typeUser.id){
        const selectedType = this.types.find(type => type.id === user.typeUser.id);
        if(selectedType){
          this.selectedType = selectedType;
        }
      }
      });
    }
  }

  loadTypes() {
    this.typeUserService.findAll().subscribe(types => {
      this.types = types;
    })
  }

  onSubmit() {
    if (!this.user.name) {
        alert('Please enter a name');
        return;
    }

    if (!this.user.firstName) {
      alert('Please enter a first name');
      return;
    }
    
    if (!this.user.email) {
      alert('Please enter a email');
      return;
    }

    if (!this.selectedType) {
        alert('Please select a type user');
        return;
    }

    this.user.typeUser = this.selectedType;
    this.userService.checkIfEmailExists(this.user.email).subscribe(exists => {
        if (exists && !this.isEditMode) {
            alert('Email already exists.');
        } else {
            this.userService.save(this.user).subscribe(result => this.gotoUserList());
        }
    });
}

  gotoUserList() {
    this.router.navigate(['/userList']);
  }
}