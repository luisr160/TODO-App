import { Component, Input, OnInit } from '@angular/core';
import { Task_ } from 'src/app/home/interfaces/task.interface';
import { TaskManagerService } from 'src/app/home/services/task-manager.service';
import {IonItemSliding} from '@ionic/angular'

@Component({
  selector: 'app-task-snippet',
  templateUrl: './task-snippet.component.html',
  styleUrls: ['./task-snippet.component.css']
})
export class TaskSnippetComponent implements OnInit {

  @Input()
  public snippetTask!:Task_;

  constructor(private taskManagerService:TaskManagerService) { }

  public completeTask(id:string,currentState:boolean,item:IonItemSliding):void{
    this.taskManagerService.completeTask(id,!currentState);
    item.close();
  }

  public deleteTask(id:string):void{
    this.taskManagerService.deleteTask(id);
  }

  ngOnInit(): void {
  }

}
