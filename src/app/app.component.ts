import { Component } from '@angular/core';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-app';
  profileOpened : boolean = false;

  constructor(public userService: UserService, private dialog: MatDialog) {}
  
  openProfile(userId: number) {
    this.profileOpened = true;
    const profileDialog =this.dialog.open(ProfileComponent, {
      disableClose: true,
      width: "30vw",
      data: { user: this.userService.getUserById(userId) }
    });

  profileDialog.afterClosed().subscribe(result => {
    this.profileOpened = false;
    })
  }
}