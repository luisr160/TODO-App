import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';
import { TaskDateFormatterService } from '../../services/task-date-formatter.service';

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

  constructor( private taskDateFormatter:TaskDateFormatterService) { }

  formatedDate(date:string):string{
    return this.taskDateFormatter.giveFormat(date);
  }

  public giveTimeFormat(time:string):string{
    return this.taskDateFormatter.giveTimeFormat(time);
  }

  ngOnInit(): void {
  }

}
