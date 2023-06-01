import { Component } from '@angular/core';
import { TaskManagerService } from './services/task-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private taskManagerService:TaskManagerService) { }

  get numberOfTasks():number{
    return this.taskManagerService.tasks.length;
  }

  ngOnInit(): void {
  }

}
