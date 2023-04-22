import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core'; 



@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss']
})
export class HotelPageComponent {
  starsImg:string = '/assets/images/star-icon.png';
  hotelViewImg:string = '/assets/images/hotel-khedi.jpg';
  hotelLivingRoom1:string = '/assets/images/hotel-main-3.jpg';
  hotelLivingRoom2:string = '/assets/images/hotel-main-4.jpg';

  bhide:boolean = false;
  lhide:boolean = false;
  bathhide:boolean = false;
  kithide:boolean = false;
  foodhide:boolean = false;

  ngOnInit() : void {
    this.bShow();
  };

  

  bShow(){
    this.bhide = true;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = false;
  };
  livingRoomShow(){
    this.bhide = false;
    this.lhide = true;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = false;
  };
  bathroomShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = true;
    this.kithide = false;
    this.foodhide = false;
  };
  kitchenShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = true;
    this.foodhide = false;
  }
  foodShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = true;
  }



  bedrooms = [
    {
      imageSrc : '/assets/images/hotel-bd.jpg',
      imageAlt : 'bedroom1',
    },
    {
      imageSrc : '/assets/images/hotel-bed.jpg',
      imageAlt : 'bedroom2',
    },
    {
      imageSrc : '/assets/images/hotel-bed-2.jpg',
      imageAlt : 'bedroom3',
    },
    {
      imageSrc : '/assets/images/hotel-bed-3.jpg',
      imageAlt : 'bedroom4',
    },
    {
      imageSrc : '/assets/images/hotel-bed-4.jpg',
      imageAlt : 'bedroom5',
    },
  ];
  livingRooms = [
    {
      imageSrc : '/assets/images/hotel-big-room.jpg',
      imageAlt : 'livingroom',
    },
    {
      imageSrc : '/assets/images/hotel-main-1.jpg',
      imageAlt : 'livingroom1',
    },
    {
      imageSrc : '/assets/images/hotel-main-2.jpg',
      imageAlt : 'livingroom2',
    },
    {
      imageSrc : '/assets/images/hotel-main-3.jpg',
      imageAlt : 'livingroom3',
    },
    {
      imageSrc : '/assets/images/hotel-main-4.jpg',
      imageAlt : 'livingroom4',
    },
  ];
  bathrooms = [
    {
      imageSrc : '/assets/images/hotel-bathroom.jpg',
      imageAlt : 'bathroom',
    },
    {
      imageSrc : '/assets/images/hotel-bathroom-2.jpg',
      imageAlt : 'bathroom2',
    },
    {
      imageSrc : '/assets/images/hotel-bathroom-3.jpg',
      imageAlt : 'bathroom3',
    },
    {
      imageSrc : '/assets/images/hotel-bathroom-4.jpg',
      imageAlt : 'bathroom4',
    },
  ];
    kitchens = [
      {
        imageSrc : '/assets/images/hotel-kitchen.jpg',
        imageAlt : 'kitchen',
      },
      {
        imageSrc : '/assets/images/hotel-kitchen-2.jpg',
        imageAlt : 'kitchen2',
      },
      {
        imageSrc : '/assets/images/hotel-cafe.jpg',
        imageAlt : 'kitchen3',
      },
  ];
    food = [
      {
        imageSrc : '/assets/images/hotel-food-1.jpg',
        imageAlt : 'food1',
      },
      {
        imageSrc : '/assets/images/hotel-food-2.jpg',
        imageAlt : 'food2',
      },
      {
        imageSrc : '/assets/images/hotel-food-3.jpg',
        imageAlt : 'food3',
      },
      {
        imageSrc : '/assets/images/hotel-food-4.jpg',
        imageAlt : 'food4',
      },
      
  ]
  

  


}
