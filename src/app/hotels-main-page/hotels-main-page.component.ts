import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hotels-main-page',
  templateUrl: './hotels-main-page.component.html',
  styleUrls: ['./hotels-main-page.component.scss']
})
export class HotelsMainPageComponent {
  locationIcon:string = '/assets/images/location.png';
  searchIcon:string = '/assets/images/nav-search.png';
  starIcon:string = '/assets/images/star-icon.png';
  nextPage:string = '/assets/images/next-page.png';
  hotelImg:string = '/assets/images/hot-hotel.jpeg';
  upArrow:string = '/assets/images/up-arrow.png';

  ngOnInit() : void {
    
  };

  header_variable:boolean = false;
  hotels_variable:boolean = false;
  progress_variable:boolean = true;
  @HostListener("document:scroll")
  scrollFunction(){
    let scrollBox:any = document.getElementById("scrollBox");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    scrollBox.style.background = `conic-gradient(#4194c1 ${scrollValue}%, transparent ${scrollValue}%)`
    if(document.body.scrollTop > 81 || document.documentElement.scrollTop > 81 ){
      this.header_variable = true;
      this.hotels_variable = true;
      this.progress_variable = true;
    }else {
      this.header_variable = false;
      this.hotels_variable = false;
      this.progress_variable = false;
    };
  };
  scrollProgress(){
    document.documentElement.scrollTop = 0;
  };
  
  // scrollProgress.style.background = `conic-gradient(green ${scrollValue}%, white ${scrollValue}%)`;




}
