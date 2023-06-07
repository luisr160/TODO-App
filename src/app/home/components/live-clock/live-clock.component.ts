import {  Component, OnInit } from '@angular/core';
import { format } from 'date-fns';


@Component({
  selector: 'app-live-clock',
  templateUrl: './live-clock.component.html',
  styleUrls: ['./live-clock.component.css']
})
export class LiveClockComponent implements OnInit{

  public currentTime:string = '';
  public date:string = '7 Jun';
  public time:string = '12:00 PM';


  constructor() {

    setInterval(() => {
      this.currentTime = format(new Date(),'d LLL - hh:mm aa'); //set time variable with current date
      [this.date,this.time] = this.currentTime.split('-');
     }, 1000);

  }

  // get liveTime():string[]{
  //   return this.liveTimeService.dateArray;
  // }

  ngOnInit(): void {
  }

}
