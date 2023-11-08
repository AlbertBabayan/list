import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  public editUserForm!: FormGroup;
  public updatedUserId!: number;
  private activeRoute = inject(ActivatedRoute);

  constructor(
    private builder: FormBuilder,
    private userSvc: UserService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.editUserForm = this.builder.group({
      name: ['', Validators.required],
      userName: ['', Validators.required],
    });
    this.activeRoute.params.subscribe(params => {
      this.updatedUserId = +params['id'];
    });
  }

  update() {
    // debugger;
    const changedUser = {
      id: this.updatedUserId,
      ...this.editUserForm.value,
    }
    this.userSvc.updateUser(changedUser);
    this.router.navigate(['users']);
  }

}
