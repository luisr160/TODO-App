import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';
import { TaskManagerService } from 'src/app/home/services/task-manager.service';


@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

  public taskList:Task_[] = [];

  public searchTerm:string = '';

  constructor(private taskManagerService:TaskManagerService) { }

  get tasklist():Task_[]{
    return this.taskManagerService.searchTasks(this.searchTerm);
  }

  public deleteTasks(id:string):void{
    this.taskManagerService.deleteTask(id);
    // this.taskList = this.taskManagerService.tasks
  }

  public updateTerm(term:string):void{
    this.searchTerm = term;
  }

  ngOnInit(): void {
    // this.taskList = this.taskManagerService.searchTasks('');
  }

}
