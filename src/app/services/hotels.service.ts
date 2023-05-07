import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HotelForm } from "../auth/auth";
import { map } from "rxjs";

@Injectable(
  {providedIn : "root"}
  )

export class HotelsService {

  constructor(private http : HttpClient){}
  

  showAddNewWindow = false;

  createHotel(form: HotelForm){
    this.showAddNewWindow = false;
    const headers = new HttpHeaders({'myHeader' : 'hotelHeader'})
      this.http.post<{name: string}>('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels.json', form, {headers : headers})
      .subscribe((res)=>{
        console.log(res)
      })
  }

  fetchHotel(){
    return this.http.get<{[key: string]: HotelForm}>('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels.json')
    .pipe(map((res) => {
      const hotels = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          hotels.push({...res[key], id: key})
        }
      }
      return hotels;
    }))

  }

  deleteHotel(id:string){
    this.http.delete('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels/' + id + '.json')
    .subscribe();
  }

  deleteAllHotel(){
    this.http.delete('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/hotels/.json')
    .subscribe();
  }
}