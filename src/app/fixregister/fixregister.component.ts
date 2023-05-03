import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-fixregister',
  templateUrl: './fixregister.component.html',
  styleUrls: ['./fixregister.component.scss']
})
export class FixregisterComponent {

  form: RegisterForm = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  }


  constructor (private authService:AuthService) {}

  ngOnInit():void {}

  submit(){
    this.authService.register(this.form)
  }
  isLoading(){
    return this.authService.isLoading;
  }



}

