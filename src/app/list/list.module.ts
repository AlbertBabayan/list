import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonplaceholderService } from './services';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { CreateUserComponent } from './components/create-user/create-user.component';



@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    JsonplaceholderService,
    UserService
  ],
})
export class ListModule { }
