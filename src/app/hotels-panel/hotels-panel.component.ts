import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { HotelForm } from '../auth/auth';
import { NgForm } from '@angular/forms';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels-panel',
  templateUrl: './hotels-panel.component.html',
  styleUrls: ['./hotels-panel.component.scss']
})
export class HotelsPanelComponent {

  @ViewChild('itsForm') itsForm : NgForm;

  form : HotelForm = {
    name : '',
    adress : '',
    image  : '',
    payment : '',
    city : '',
    stars : 0,
    info : '',
  };


  // @ViewChild('hotelFform') newForm : NgForm | undefined;

  constructor(private hotelService:HotelsService){}

  allHotels: HotelForm[] = [];


  

  ngOnInit():void {
    this.fetchHotels(); 
  }

  onFetchHotels(){
    this.fetchHotels(); 
  }

  hCreate(form:HotelForm){
    this.hotelService.createHotel(form);
    this.showAddNewWindow = false;
  }

  private fetchHotels(){
    this.hotelService.fetchHotel().subscribe((hotels) => {
      this.allHotels = hotels;
    })
  }

  deleteHotel(id: string){
    this.hotelService.deleteHotel(id);
  }

  deleteAllHotel(){
    this.hotelService.deleteAllHotel();
  }






  showAddNewWindow:any = false;

  addNewHotel(){
    this.showAddNewWindow = true;
  }
  closeAddNewHotel(){
    this.showAddNewWindow = false;
  }

  hotelsInfo:boolean = false;

  openHotelInfo(id:string){
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




  enteredSearchValue:string = '';


  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();


  onSearchTextChanged(){
    this.searchTextChanged.emit(this.enteredSearchValue)
    console.log(this.enteredSearchValue)
  }
}
