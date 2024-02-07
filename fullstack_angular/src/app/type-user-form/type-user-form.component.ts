import { Component } from '@angular/core';
import { TypeUser } from '../type-user';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUserService } from '../type-user.service';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrl: './type-user-form.component.css'
})
export class TypeUserFormComponent {

  typeUser: TypeUser;
  isEditMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private typeUserService: TypeUserService) {
    this.typeUser = new TypeUser();
  }

  ngOnInit(): void {
    const typeUserId = this.route.snapshot.paramMap.get('id');
    if (typeUserId) {
      this.isEditMode = true;
      this.typeUserService.getTypeUserById(+typeUserId).subscribe(typeUser => {
        this.typeUser = typeUser;
      })
    }
  }

  onSubmit() {
    if (!this.typeUser.type) {
      alert('Please enter a type');
      return;
  }
    this.typeUserService.checkIfTypeUserExists(this.typeUser.type).subscribe(exists => {
      if (exists && !this.isEditMode) {
        alert('Type user already exists.');
      } else {
        this.typeUserService.save(this.typeUser).subscribe(result => this.gotoTypeUserList());
      }
    });
  }

  gotoTypeUserList() {
    this.router.navigate(['/typeUserList']);
  }

}
