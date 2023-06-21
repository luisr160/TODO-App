import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';
import { TaskDateFormatterService } from 'src/app/home/services/task-date-formatter.service';

@Component({
  selector: 'task-details-modal',
  templateUrl: './task-details-modal.component.html',
  styleUrls: ['./task-details-modal.component.css']
})
export class TaskDetailsModalComponent {

  @Input()
  public detailTask!:Task_;

  @Input()
  public modalID!:string;

  constructor(private taskDateFormatter:TaskDateFormatterService) { }

  public formatedDate(date:string):string{
    return this.taskDateFormatter.giveFormat(date);
  }

  public giveTimeFormat(time:string,date:string):string{
    return this.taskDateFormatter.giveTimeFormat(time,date);
  }

}
