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


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent {

  constructor(private http : HttpClient){}

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, resourceTimelinePlugin],
    headerToolbar : {
      left : 'perv,next today',
      center : 'title',
      right : 'dayGridMonth, timeGridWeek, listWeek',
    },

  };

  
  selectable : boolean = false;

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


    this.events = [
      {
        title : "Antony's Family",
        start : new Date(new Date().getTime()),
      },
      {
        title : "Jhon",
        start : new Date(new Date().getTime() + 86400000 * 2),
        end : new Date(new Date().getTime() + 86400000 * 5),
        description : 'Room 30'
      },
      // {
      //   title : "Reus",
      //   start : new Date(new Date().getTime() + (286400000 * 3.3)),
      // },
      // {
      //   title : "Rashford",
      //   start : new Date(new Date().getTime() + (286400000 * 2)),
      //   end : new Date(new Date().getTime() + (286400000 * 3) )
      // },
      // {
      //   start: '2014-11-10T10:00:00',
      //   end: '2014-11-10T16:00:00',
      //   display: 'background'
      // },
      // {
      //   groupId: 'testGroupId',
      //   start: '2014-11-10T10:00:00',
      //   end: '2014-11-10T16:00:00',
      //   display: 'inverse-background'
      // },
    ];

  }

  openBookingSystem:boolean = false;


  bookingForm : BookingForm = {
    title : '',
    start : '',
    end : '',
    room : '',
  }

  onSubmit(bookingForm : BookingForm){
    const headers = new HttpHeaders({'myHeader' : 'booking'})
    this.http.post('https://travel-more-gm-default-rtdb.europe-west1.firebasedatabase.app/bookingform.json', bookingForm,
    {headers: headers})
    .subscribe((res) => {
      console.log(res)
    })
    console.log(bookingForm)
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

  

}
