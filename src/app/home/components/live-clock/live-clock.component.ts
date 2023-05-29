import { Component, OnInit } from '@angular/core';
import {format} from 'date-fns';

@Component({
  selector: 'app-live-clock',
  templateUrl: './live-clock.component.html',
  styleUrls: ['./live-clock.component.css']
})
export class LiveClockComponent implements OnInit {

  public algo = format(new Date(2014, 1, 11), 'MM/dd/yyyy');

  constructor() { }

  ngOnInit(): void {
  }

}
