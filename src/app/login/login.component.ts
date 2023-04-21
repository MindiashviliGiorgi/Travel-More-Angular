import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFbIcon:string = '/assets/images/login-fb.png';
  loginTwitterIcon:string = '/assets/images/login-twitter.png';
  loginIgIcon:string = '/assets/images/login-ig.png';
  loginInIcon:string = '/assets/images/login-in.png';
  logo:string = '/assets/images/travelmore-logo.png';
  emailPlaceholder:string = 'Email';
  passwordPlaceholder:string = 'Password';

  signIn:boolean = true;
  helloFriend:boolean = true;
  signUp:boolean = false;
  welcome:boolean = false;


  ngOnInit() : void {

  };


  activeTitleDecore(){
    let light:any = document.getElementById("light");
    let su:any = document.getElementById("su");
    let si:any = document.getElementById('si');
    if(this.signIn != true){
      light.style.left = '180px';
      light.style.transition = '0.5s';
      su.style.color = '#71cdff';
      si.style.color = "#fff"
    }
  };
  signUpBtn(){
    this.signIn = false;
    this.helloFriend = false;
    this.signUp = true;
    this.welcome = true;
    this.activeTitleDecore();
  };
  signInBtn(){
    this.signIn = true;
    this.helloFriend = true;
    this.signUp = false;
    this.welcome = false;
    let light:any = document.getElementById("light");
    let su:any = document.getElementById("su");
    let si:any = document.getElementById('si');
      light.style.left = '0px';
      light.style.transition = '0.5s';
      su.style.color = '#fff';
      si.style.color = "#71cdff"
  }
  signInLink(){
    this.signIn = true;
    this.helloFriend = true;
    this.signUp = false;
    this.welcome = false;
    let light:any = document.getElementById("light");
    let su:any = document.getElementById("su");
    let si:any = document.getElementById('si');
    light.style.left = "0px";
    light.style.transition = '0.5s';
    su.style.color = "#fff";
    si.style.color = "#71cdff"
  };
  signUpLink(){
    this.signIn = false;
    this.helloFriend = false;
    this.signUp = true;
    this.welcome = true;
    let light:any = document.getElementById("light");
    let su:any = document.getElementById("su");
    let si:any = document.getElementById('si');
    light.style.left = "180px";
    light.style.transition = '0.5s';
    su.style.color = "#71cdff";
    si.style.color = "#fff"
  }


}
