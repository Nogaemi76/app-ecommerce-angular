import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
    // this.afAuth.authState.subscribe(user => {
    //   console.log(user);
    // });
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
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
