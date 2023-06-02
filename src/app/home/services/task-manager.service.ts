import { Injectable } from '@angular/core';
import { Task_ } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private _taskList:Task_[] = [
    // {
    //   title:'Task 1',
    //   category: 'personal',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'30/05/2023',
    //   hour:'9:07',
    //   isCompleted : true
    // },
    // {
    //   title:'Task 2',
    //   category: 'work',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'30/05/2023',
    //   hour:'9:07',
    //   isCompleted : false
    // },
    // {
    //   title:'Task 3',
    //   category: 'misc',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'30/05/2023',
    //   hour:'9:07',
    //   isCompleted : true
    // },
    // {
    //   title:'Task 4',
    //   category: 'personal',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'30/05/2023',
    //   hour:'9:07',
    //   isCompleted : false
    // }
  ];

  constructor() { }

  public addTask(task:Task_):void{
    const newTask:Task_ = {...task, id:uuid()};
    this._taskList.push(newTask);
  }

  public deleteTask(id:string):void{
    this._taskList = this._taskList.filter(task => task.id !== id);
  }

  get tasks(){
    return [...this._taskList]
  }
}
