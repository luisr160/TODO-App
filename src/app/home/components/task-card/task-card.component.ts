import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent implements OnInit {

  @Input()
  public isVertical : boolean = false;

  @Input()
  public task!:Task_;

  constructor() { }

  ngOnInit(): void {
  }

}
