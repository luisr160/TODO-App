import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';
import { TaskManagerService } from '../../services/task-manager.service';

@Component({
  selector: 'app-task-scroller',
  templateUrl: './task-scroller.component.html',
  styleUrls: ['./task-scroller.component.css']
})
export class TaskScrollerComponent implements OnInit {

  @Input()
  public isVertical:boolean = false;

  public taskList?:Task_[];

  constructor(public taskService:TaskManagerService) { }

  ngOnInit(): void {
    this.taskList = this.taskService.tasks;
  }

}
