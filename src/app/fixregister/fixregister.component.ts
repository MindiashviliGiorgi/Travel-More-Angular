import { Component } from '@angular/core';
import { RegisterForm } from '../auth/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

  passwordMatched:boolean = true;

  isLoading:boolean = false;

  submit(){
    if(this.isLoading){return}
    if(this.form.password != this.form.confirm_password){
      this.passwordMatched = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
      }).finally(() => (this.isLoading = false))

  }

  constructor () {}

  ngOnInit():void {}

}

