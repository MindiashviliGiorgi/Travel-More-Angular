import { Component } from '@angular/core';
import { LoginForm } from '../auth/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../auth.service';

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

  constructor(private authService : AuthService){}




  submit(){
    this.authService.login(this.form)
  }
  isLoading(){
    return this.authService.isLoading;
  }
}
