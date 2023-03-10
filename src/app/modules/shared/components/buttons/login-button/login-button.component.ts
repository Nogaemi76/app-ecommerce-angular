import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/auth/auth.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.scss']
})
export class LoginButtonComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.authService.logInWithGoogle();
  }

}
