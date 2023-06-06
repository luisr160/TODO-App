import {  Component, OnInit } from '@angular/core';
import { format } from 'date-fns';

@Component({
  selector: 'app-live-clock',
  templateUrl: './live-clock.component.html',
  styleUrls: ['./live-clock.component.css']
})
export class LiveClockComponent implements OnInit{

  public currentTime:string = '';
  public hour:string = '';
  public minutes:string = '';


  constructor() {

    setInterval(() => {
      this.currentTime = format(new Date(),'d LLL - hh:mm aa'); //set time variable with current date
      [this.hour,this.minutes] = this.currentTime.split('-');
     }, 1000);

  }

  // get liveTime():string[]{
  //   return this.liveTimeService.dateArray;
  // }

  ngOnInit(): void {
  }

}
