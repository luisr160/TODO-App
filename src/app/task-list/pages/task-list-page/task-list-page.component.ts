import { Component, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';
import { TaskManagerService } from 'src/app/home/services/task-manager.service';


@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

  public taskList:Task_[] = [];

  constructor(private taskManagerService:TaskManagerService) { }

  get tasklist():Task_[]{
    return this.taskList;
  }


  public searchTasks(term:string):void{
    this.taskList = this.taskManagerService.searchTasks(term);
  }

  ngOnInit(): void {
    this.taskList = this.taskManagerService.searchTasks('');
  }

}
