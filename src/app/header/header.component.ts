import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  logo:string = '/assets/images/travelmore-logo.png';
  myImg:string = '/assets/images/better-logout.png';
  adminPanel:string = '/assets/images/admin-panel.png';
}
