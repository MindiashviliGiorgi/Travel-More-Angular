import { Component } from '@angular/core';
import { Calendar, CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import esLocale from '@fullcalendar/core/locales/es'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import { BookingForm } from '../auth/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {


  constructor(private http : HttpClient, private authService : AuthService){}
  isAuthenticated(){
    return this.authService.isAuthenticated;
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, resourceTimelinePlugin],
    headerToolbar : {
      left : 'perv,next today',
      center : 'title',
      right : 'dayGridMonth, timeGridWeek, listWeek',
    },

  };

  deleteIcon : string = '/assets/images/delete.png';

  
  selectable : boolean = false;
  bookingListShow : boolean = false;

  public events : any[];

  public options : any;

  ngOnInit(){

    this.fetchBooking();
    

    this.options = {
      plugins : [dayGridPlugin, interactionPlugin, listPlugin, resourceTimelinePlugin],
      defaultDate : new Date(),
      initialView : 'dayGridMonth, resourceTimeline, timeGridWeek',
      initialDate: '2014-11-10',
      locale : esLocale,
      headerToolbar : {
        left : 'perv,next today',
        center : 'title',
        right : 'dayGridMonth, timeGridWeek, listWeek',
      },
      editable : false,
      selectOverlap: function(event) {
        return event.rendering === 'red';
      }
    }


    this.events = [];

  }

  openBookingSystem:boolean = false;


  bookingForm : BookingForm = {
    title : '',
    start : '',
    end : '',
    room : '',
  }

  price : string = '';


  onSubmit(bookingForm : BookingForm){
    const headers = new HttpHeaders({'myHeader' : 'booking'})
    this.http.post('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/bookingform.json', bookingForm,
    {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })
    console.log(bookingForm);
    alert('Tap to Show Booking');
    this.openBookingSystem = false;
  }

  private fetchBooking(){
    this.http.get('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/bookingform.json')
    .pipe(map((res) => {
      // const bookingArray = [];
      this.events = [];
      for(const key in res){
        if(res.hasOwnProperty(key)){
          this.events.push({...res[key], id : key})
        }
      }
      return this.events;
    }))
    .subscribe((res) => {
      console.log(res)
      this.events;
    })
  }
  
  onBookingFetch(){
    this.fetchBooking();
  }

  bookingDelete(id:string){
    this.http.delete('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/bookingform/' + id + '.json')
    .subscribe();
    alert('Tap to Show Booking');
  }
  
  

}
