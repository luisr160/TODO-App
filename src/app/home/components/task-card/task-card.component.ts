import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';
import { TaskDateFormatterService } from '../../services/task-date-formatter.service';
import { Category } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css']
})
export class TaskCardComponent  {

  @Input()
  public isVertical : boolean = false;

  @Input()
  public task!:Task_;

  constructor( private taskDateFormatter:TaskDateFormatterService) { }

  public styleClass (isVertical:boolean, task:Task_):Object {
    return {
        'horizontal-strip custom-card': !isVertical,
        'vertical-strip custom-card-vertical' : isVertical,
        'personal-style' : task.category === Category.Personal,
        'work-style' : task.category === Category.Work,
        'shopping-style' : task.category === Category.Shopping,
        'house-style' : task.category === Category.House,
        'university-style' : task.category === Category.University,
        'expired-style' : task.isExpired 
      }
  }  

  formatedDate(date:string):string{
    return this.taskDateFormatter.giveFormat(date);
  }

  public giveTimeFormat(time:string,date:string):string{
    return this.taskDateFormatter.giveTimeFormat(time,date);
  }


}
