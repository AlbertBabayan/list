import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { IUser } from 'src/app/infrastructure';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private http = inject(HttpClient);
  public usersList: IUser[];
  // public users$: Observable<IUser[]>;

  constructor() { }

  public updateUser(updatedUser: IUser) {
    debugger;
    this.usersList = this.usersList.map(item => item.id === updatedUser.id ? updatedUser : item);
    console.log(this.usersList);
  }
}
