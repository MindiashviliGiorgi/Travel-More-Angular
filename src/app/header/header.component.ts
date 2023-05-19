import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService : AuthService){}

  logo:string = '/assets/images/travelmore-logo.png';
  myImg:string = '/assets/images/better-logout.png';
  adminPanel:string = '/assets/images/admin-panel.png';
  hamburger:string = '/assets/images/hamburger-menu.png';
  hamburgerMenu : boolean = false;

  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  signOut(){
    this.authService.logout();
  }

  closeHamburger(){
    this.hamburgerMenu = false; 
  }
}
