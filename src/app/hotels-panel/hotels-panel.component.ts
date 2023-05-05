import { Component } from '@angular/core';
import { TestService } from '../services/test.service';
import { HotelForm } from '../auth/auth';
import { AuthService } from '../auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-hotels-panel',
  templateUrl: './hotels-panel.component.html',
  styleUrls: ['./hotels-panel.component.scss']
})
export class HotelsPanelComponent {

  form: HotelForm = {
    name : '',
    adress : '',
    image  : '',
    payment : '',
    city : '',
    stars : 0,
    info : '',
  };

  constructor(private http : HttpClient){}

  allHotels: HotelForm[] = [];



  ngOnInit():void {
    this.fetchHotels(); 
  }

  onFetchHotels(){
    this.fetchHotels(); 
  }

  hCreate(form:HotelForm){
    this.onFetchHotels();
    this.showAddNewWindow = false;
    const headers = new HttpHeaders({'myHeader' : 'hotelHeader'})
    this.http.post<{name: string}>('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels.json', form, {headers : headers})
    .subscribe((res)=>{

    })
  }

  private fetchHotels(){
    this.http.get<{[key: string]: HotelForm}>('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels.json')
    .pipe(map((res) => {
      const hotels = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          hotels.push({...res[key], id: key})
        }
      }
      return hotels;
    }))
    .subscribe((hotels) => {
      console.log(hotels);
      this.allHotels = hotels;
    })
  }








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


  // userInfos : any = [];

  // constructor(private testService : TestService){

  // }

  // ngOnInit() : void {
  //   this.getAllUsers();
  // }
  // getAllUsers(){
  //   this.testService.getAllUsers().subscribe((res)=>{
  //     this.userInfos = res;
  //     console.log(res)
  //   })
  // }
  

}
