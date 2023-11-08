import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IUser } from 'src/app/infrastructure';
import { JsonplaceholderService, UserService } from '../../services';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  public userSvc = inject(UserService);
  private router = inject(Router);

  public users!: IUser[];
  private destroy$ = new Subject();

  constructor(
    private jsonPH: JsonplaceholderService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private getUsers() {
    this.jsonPH.getUsers()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(resp => {
        if (!this.userSvc.usersList?.length) {
          this.userSvc.usersList = resp;
        }
        this.users = this.userSvc.usersList;
      });
  }

  public userDetails(id: number) {
    this.router.navigate(['user-details', id]);
  }

  public deleteUser(id: number) {
    this.users = this.users.filter(item => item.id !== id);
  }

  public addUser(){
    this.router.navigate(['create-user']);
  }
}
