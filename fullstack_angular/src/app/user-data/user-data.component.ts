import { Component } from '@angular/core';
import { User } from '../user';
import { TypeUser } from '../type-user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { TypeUserService } from '../type-user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.css'
})
export class UserDataComponent {

  user: User = new User();
  types: TypeUser[] = [];
  selectedType: TypeUser | null = null;

  constructor(private route: ActivatedRoute, private userService: UserServiceService, private typeUserService: TypeUserService) {}

  ngOnInit(): void {
    this.loadTypes();

    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
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
}