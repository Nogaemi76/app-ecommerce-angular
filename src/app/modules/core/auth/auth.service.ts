import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      public afAuth: AngularFireAuth,
      public router: Router
    ) {
  }

  logInWithGoogle() {
    return this.authLogin(new GoogleAuthProvider());
  }

  authLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('Successfully logged In!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logOut() {
    return this.afAuth.signOut()
      .then((result) => {
        console.log('Successfully logged Out!');
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCurrentUser() {
    return this.afAuth.user;
  }
}
