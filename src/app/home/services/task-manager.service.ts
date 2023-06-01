import { Injectable } from '@angular/core';
import { Task_ } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private _taskList:Task_[] = [
    {
      title:'Task 1',
      category: 'personal',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07',
      isCompleted : true
    },
    {
      title:'Task 2',
      category: 'work',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07',
      isCompleted : false
    },
    {
      title:'Task 3',
      category: 'misc',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07',
      isCompleted : true
    },
    {
      title:'Task 4',
      category: 'personal',
      description: 'Esto es una descripción de la prueba.',
      date:'30/05/2023',
      hour:'9:07',
      isCompleted : false
    }
  ]

  constructor() { }

  get tasks(){
    return [...this._taskList]
  }
}
