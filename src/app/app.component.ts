import { Component, OnInit } from '@angular/core';
import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Travel-More-GM';

  ngOnInit():void {
    initializeApp(firebaseConfig);
  }

  constructor(private authService : AuthService){}

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }
  
}
