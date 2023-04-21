import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  logo:string = '/assets/images/travelmore-logo.png';
  rightArrow:string = '/assets/images/right-arrow.png';
  
}
