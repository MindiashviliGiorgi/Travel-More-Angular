import { NgClass } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core'; 



@Component({
  selector: 'app-hotel-page',
  templateUrl: './hotel-page.component.html',
  styleUrls: ['./hotel-page.component.scss']
})
export class HotelPageComponent {


  constructor() {}

  //facilitiesIcons
  noSmoking:string = '/assets/images/no-smoking.png';
  airport:string = '/assets/images/airport-transfer.png';
  disabledGuest:string = '/assets/images/wheelchair.png';
  wifi:string = '/assets/images/wifi.png';
  parking:string = '/assets/images/parking.png';
  restaurant:string = '/assets/images/restaurantt.png';
  roomService:string = '/assets/images/room-service.png';
  heating:string = '/assets/images/heating.png';
  bar:string = '/assets/images/bar.png';
  //

  bedIcon:string = '/assets/images/bed-2.png';
  personIcon:string = '/assets/images/person.png';







  starsImg:string = '/assets/images/star-icon.png';
  hotelViewImg:string = '/assets/images/hotel-khedi.jpg';
  hotelLivingRoom1:string = '/assets/images/hotel-main-3.jpg';
  hotelLivingRoom2:string = '/assets/images/hotel-main-4.jpg';

  bhide:boolean = false;
  lhide:boolean = false;
  bathhide:boolean = false;
  kithide:boolean = false;
  foodhide:boolean = false;

  activeLinkBedroom:boolean = false;
  activeLinkLivingRoom:boolean = false;
  activeLinkBathroom:boolean = false;
  activeLinkKitchen:boolean = false;
  activeLinkFood:boolean = false;
  

  ngOnInit() : void {
    this.bShow();
  };

  

  bShow(){
    this.bhide = true;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = false;
    //active Links
    this.activeLinkBedroom = true;
    this.activeLinkLivingRoom = false;
    this.activeLinkBathroom = false;
    this.activeLinkFood = false;
    this.activeLinkKitchen = false;
  };
  livingRoomShow(){
    this.bhide = false;
    this.lhide = true;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = false;
    //active Links
    this.activeLinkBedroom = false;
    this.activeLinkLivingRoom = true;
    this.activeLinkBathroom = false;
    this.activeLinkFood = false;
    this.activeLinkKitchen = false;
  };
  bathroomShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = true;
    this.kithide = false;
    this.foodhide = false;
    //active Links
    this.activeLinkBedroom = false;
    this.activeLinkLivingRoom = false;
    this.activeLinkBathroom = true;
    this.activeLinkFood = false;
    this.activeLinkKitchen = false;
  };
  kitchenShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = true;
    this.foodhide = false;
    //active Links
    this.activeLinkBedroom = false;
    this.activeLinkLivingRoom = false;
    this.activeLinkBathroom = false;
    this.activeLinkFood = false;
    this.activeLinkKitchen = true;
  }
  foodShow(){
    this.bhide = false;
    this.lhide = false;
    this.bathhide = false;
    this.kithide = false;
    this.foodhide = true;
    //active Links
    this.activeLinkBedroom = false;
    this.activeLinkLivingRoom = false;
    this.activeLinkBathroom = false;
    this.activeLinkFood = true;
    this.activeLinkKitchen = false;
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
  

  
  //hotel-reservation

  @Output() CheckInAdded = new EventEmitter<string>();

  @ViewChild('checkInDate') checkInDate: ElementRef | undefined;
  @ViewChild('checkOutDate') checkOutDate: ElementRef | undefined;


  showCheckInTime:string = '';
  showCheckOutTime:string = '';
  showRoomStyle:string = '';
  showTotalPrice:any = '';
  totalAmount:boolean = false;

  date1 : any;
  date2 : any;
  Days:any = '';

  showPriceStardardRoom(){
    this.totalAmount = true;

    this.showRoomStyle = 'Stardard room';

    let checkInTime:any= this.checkInDate?.nativeElement.value;
    this.showCheckInTime = checkInTime;

    let checkOutTime:any = this.checkOutDate?.nativeElement.value;
    this.showCheckOutTime = checkOutTime;

    const date1Modified = new Date(checkInTime);
    const date2Modified = new Date(checkOutTime);

    const Time = date2Modified.getTime() - date1Modified.getTime();

    this.Days = "For " + Time / (1000 * 3600 * 24 ) + " Days, Per day 100Gel";

    const totalPrice = (Time / (1000 * 3600 * 24)) * 100;
    this.showTotalPrice = totalPrice + "Gel";

  }
  showPriceSuperiorRoom(){
    this.totalAmount = true;

    this.showRoomStyle = 'Superior room';

    let checkInTime:any= this.checkInDate?.nativeElement.value;
    this.showCheckInTime = checkInTime;

    let checkOutTime:any = this.checkOutDate?.nativeElement.value;
    this.showCheckOutTime = checkOutTime;

    const date1Modified = new Date(checkInTime);
    const date2Modified = new Date(checkOutTime);

    const Time = date2Modified.getTime() - date1Modified.getTime();

    this.Days = "For " + Time / (1000 * 3600 * 24 ) + " Days, Per day 150Gel";

    const totalPrice = (Time / (1000 * 3600 * 24)) * 150;
    this.showTotalPrice = totalPrice + "Gel";
  }

  showFamilyRoom(){
    this.totalAmount = true;

    this.showRoomStyle = 'Family room';

    let checkInTime:any= this.checkInDate?.nativeElement.value;
    this.showCheckInTime = checkInTime;

    let checkOutTime:any = this.checkOutDate?.nativeElement.value;
    this.showCheckOutTime = checkOutTime;

    const date1Modified = new Date(checkInTime);
    const date2Modified = new Date(checkOutTime);

    const Time = date2Modified.getTime() - date1Modified.getTime();

    this.Days = "For " + Time / (1000 * 3600 * 24 ) + " Days, Per day 200Gel";

    const totalPrice = (Time / (1000 * 3600 * 24)) * 200;
    this.showTotalPrice = totalPrice + "Gel";
  }
  showPremiumRoom(){
    this.totalAmount = true;

    this.showRoomStyle = 'Premium room';

    let checkInTime:any= this.checkInDate?.nativeElement.value;
    this.showCheckInTime = checkInTime;

    let checkOutTime:any = this.checkOutDate?.nativeElement.value;
    this.showCheckOutTime = checkOutTime;

    const date1Modified = new Date(checkInTime);
    const date2Modified = new Date(checkOutTime);

    const Time = date2Modified.getTime() - date1Modified.getTime();

    this.Days = "For " + Time / (1000 * 3600 * 24 ) + " Days, Per day 250Gel";

    const totalPrice = (Time / (1000 * 3600 * 24)) * 250;
    this.showTotalPrice = totalPrice + "Gel";
  }

}
