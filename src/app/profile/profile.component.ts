import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User, UserService } from '../auth/user.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEditing: boolean = false;
  profileForInput: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      name: this.data.user.name,
      surname: this.data.user.surname,
      email: this.data.user.email,
      password: this.data.user.password,
      address: this.data.user.address,
      phone: this.data.user.phone,
      fav: this.data.user.fav
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.name = this.profileForInput.name;
    this.data.user.surname = this.profileForInput.surname;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;
    this.data.user.phone = this.profileForInput.phone;
    this.data.user.fav = this.profileForInput.fav;

    console.log(this.data.user);
    console.log(UserService.dummyUserList);
    this.isEditing = false;
  }

}
