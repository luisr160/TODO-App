import { Component, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';
import { TaskManagerService } from 'src/app/home/services/task-manager.service';


@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {

  constructor(private taskManagerService:TaskManagerService) { }

  get tasks():Task_[]{
    return this.taskManagerService.tasks;
  }

  ngOnInit(): void {
  }

}
