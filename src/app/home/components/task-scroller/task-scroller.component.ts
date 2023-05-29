import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-scroller',
  templateUrl: './task-scroller.component.html',
  styleUrls: ['./task-scroller.component.css']
})
export class TaskScrollerComponent implements OnInit {

  @Input()
  public isVertical : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
