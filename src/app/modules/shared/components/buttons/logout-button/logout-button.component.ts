import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/core/auth/auth.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logOut();
  }

}
