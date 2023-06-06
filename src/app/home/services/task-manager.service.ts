import { Injectable } from '@angular/core';
import { Task_ } from '../interfaces/task.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private _taskList:Task_[] = [];

  constructor() { }

  public addTask(task:Task_):void{
    const newTask:Task_ = {...task, id:uuid()};
    this._taskList.push(newTask);
  }

  public completeTask(id:string,newState:boolean):void{
    const index = this._taskList.findIndex(task => task.id === id);
    this._taskList[index].isCompleted = newState;

    // Lo mismo en una sola linea, pero puede afectar la 
    // legibilidad y futuro mantenimiento del código.

    // this._taskList.find(task => task.id === id)!.isCompleted = true
  }

  public deleteTask(id:string):void{
    this._taskList = this._taskList.filter(task => task.id !== id);
  }

  public searchTasks(term:string):Task_[]{
    if(term === ''){
      return this.tasks;
    }
    
    return this._taskList.filter(task => task.title.includes(term));
  }

  get tasks(){
    return [...this._taskList]
  }
}


  // {
    //   id: uuid(),
    //   title:'Task 1',
    //   category: 'personal',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'2023-06-05',
    //   hour:'9:07',
    //   isCompleted : true
    // },
    // {
    //   id: uuid(),
    //   title:'Task 2',
    //   category: 'work',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'2023-06-04',
    //   hour:'9:07',
    //   isCompleted : false
    // },
    // {
    //   id: uuid(),
    //   title:'Task 3',
    //   category: 'misc',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'2023-01-30',
    //   hour:'9:07',
    //   isCompleted : true
    // },
    // {
    //   id: uuid(),
    //   title:'Task 4',
    //   category: 'personal',
    //   description: 'Esto es una descripción de la prueba.',
    //   date:'2023-06-06',
    //   hour:'9:07',
    //   isCompleted : false
    // }