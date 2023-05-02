import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixlogin',
  templateUrl: './fixlogin.component.html',
  styleUrls: ['./fixlogin.component.scss']
})
export class FixloginComponent {
  
  form: LoginForm = {
    email: '',
    password: '',
  };

  constructor(private router : Router){}

  isLoading:boolean = false;

  submit(){
    if(this.isLoading) return;
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        this.router.navigate(['/hotelsmain'])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Something going wrong')
      }).finally(() => (this.isLoading = false))
  }

}
