import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { HotelForm, LoginForm, RegisterForm } from './auth/auth';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean = false;
  isLoading: boolean = false;
  passwordMatched:boolean = true;

  constructor(private router : Router) {}




  login(form:LoginForm){
    if(this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.router.navigate(['/hotelsmain']);
        this.isAuthenticated = true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Something Wrong')
        this.isAuthenticated = false;
      }).finally(() => (this.isLoading = false))
  }

  register(form:RegisterForm){
    if(this.isLoading){return}
    if(form.password != form.confirm_password){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        alert('Tap to sign in')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      }).finally(() => (this.isLoading = false))
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['/'])
      this.isAuthenticated = false;
    }).catch((error) => {
      // An error happened.
    });

  }

}
