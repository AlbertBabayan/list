import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  public createUserForm!: FormGroup;
  private userSvc = inject(UserService);
  private router = inject(Router);

  constructor(
    private builder: FormBuilder,
  ) { }

  ngOnInit() {
    this.createUserForm = this.builder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
    });
  }

  public createUser() {
    const createdUser = {
      id: this.userSvc.usersList.length + 1,
      ...this.createUserForm.value,
    }
    this.userSvc.usersList.push(createdUser);
    this.router.navigate(['users']);
  }
}
