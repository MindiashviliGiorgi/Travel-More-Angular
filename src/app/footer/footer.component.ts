import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  logo:string = '/assets/images/travelmore-logo.png';
  fb:string = '/assets/images/footer-fb-icon.png';
  ig:string = '/assets/images/footer-ig-icon.png';
  linkedin:string = '/assets/images/footer-in-icon.png';
  phone:string = '/assets/images/footer-phone-icon.png';
  gmail:string = '/assets/images/footer-gmail-icon.png'
}
