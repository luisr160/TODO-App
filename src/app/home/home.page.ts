import { Component, Output} from '@angular/core';
import { TaskManagerService } from './services/task-manager.service';
import { Task_ } from './interfaces/task.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public TaskList:Task_[] = [];

  constructor(private taskManagerService:TaskManagerService) { }

  get numberOfTasks():number{
    return this.taskManagerService.tasks.length;
  }

  get completedTasks():Task_[]{
    return this.taskManagerService.tasks.filter(task => task.isCompleted);
  }

  get incompletedTasks():Task_[]{
    return this.taskManagerService.tasks.filter(task => !task.isCompleted)
  }

  ngOnInit(): void {
  }

}
