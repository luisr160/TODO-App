import {  Component, OnInit } from '@angular/core';
import { LiveDateService } from '../../services/live-date.service';
import { format } from 'date-fns';

@Component({
  selector: 'app-live-clock',
  templateUrl: './live-clock.component.html',
  styleUrls: ['./live-clock.component.css']
})
export class LiveClockComponent implements OnInit{

  public currentTime:string = '';
  public dateArray!:string[];

  constructor() { }

  // get liveTime():string[]{
  //   return this.liveTimeService.dateArray;
  // }

  private async updateCurrentTime(){
    const now = new Date();
    this.currentTime = format(now,'d LLL - hh:mm aa');
    this.dateArray = this.currentTime.split('-');
    //console.log(this.dateArray)
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.updateCurrentTime();
    }, 1000);
  }

}
