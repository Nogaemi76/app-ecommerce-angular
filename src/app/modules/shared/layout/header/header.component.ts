import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/auth/auth.service';
import { User } from 'src/app/modules/core/auth/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: User | null = null;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getCurrentUser()
      .subscribe((user) => {
      if (user) {
        this.currentUser = {
          uid : user.uid,
          name : user.displayName,
          email : user.email,
          photoUrl: user.photoURL
        };
        this.isLoggedIn = true;
      } else {
        this.currentUser = null;
        this.isLoggedIn = false;
      }
    });
  }

  onLogin() {
    this.authService.logInWithGoogle();
  }

  onLogout() {
    this.authService.logOut();
  }

}
