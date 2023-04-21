import { Component } from '@angular/core';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-hotels-panel',
  templateUrl: './hotels-panel.component.html',
  styleUrls: ['./hotels-panel.component.scss']
})
export class HotelsPanelComponent {

  showAddNewWindow:any = false;

  addNewHotel(){
    this.showAddNewWindow = true;
  }
  closeAddNewHotel(){
    this.showAddNewWindow = false;
  }

  hotelsInfo:any = false;

  openHotelInfo(){
    this.hotelsInfo = true;
  }
  closeHotelInfo(){
    this.hotelsInfo = false;
  }

  selectIcon:string = '/assets/images/select.png';
  searchIcon:string = '/assets/images/search.png';
  decoreIcon:string = '/assets/images/decore.png';
  placeholderSelect:string = 'Select column';
  searchPlc:string = 'Searchi list...';
  closeIcon:string = '/assets/images/close.png';
  hotelImg:string = '/assets/images/hotel.jpeg';


  userInfos : any = [];

  constructor(private testService : TestService){

  }

  ngOnInit() : void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.testService.getAllUsers().subscribe((res)=>{
      this.userInfos = res;
      console.log(res)
    })
  }
  

}
