import { Injectable } from '@angular/core';
import { Task_ } from '../interfaces/task.interface';
import { Category } from '../interfaces/categories.interface';
import { TaskDateFormatterService } from './task-date-formatter.service';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  private _taskList:Task_[] = [];

  private _category : Category[] = [
    Category.University,
    Category.Work,
    Category.Shopping,
    Category.House,
    Category.Personal
]

  constructor(private dateFormatter:TaskDateFormatterService) { 
      this.loadLocalStorage();
   }

   get categories() : Category[] {
    return [...this._category];
  }

   get tasks(){
    return [...this._taskList]
  }

  public addTask(task:Task_):void{
    const newTask:Task_ = {...task};
    this._taskList.push(newTask);
  
    this.saveLocalStorage();
  }

  public completeTask(id:string,newState:boolean):void{
    const index = this._taskList.findIndex(task => task.id === id);
    this._taskList[index].isCompleted = newState;
    this.saveLocalStorage();

    // Lo mismo en una sola linea, pero puede afectar la 
    // legibilidad y futuro mantenimiento del código.

    // this._taskList.find(task => task.id === id)!.isCompleted = true
  }

  public deleteTask(id:string):void{
    this._taskList = this._taskList.filter(task => task.id !== id);
    this.saveLocalStorage();
  }

  public searchTasks(term:string):Task_[]{
    if( !term ){
      return this.tasks;
    }

    term = term.toLowerCase();
    
    return this._taskList.filter(task => {
       return task.title.toLowerCase().includes(term) || 
       task.category.toLowerCase().includes(term)
    });
  }

  public taskProgress():void{

    this._taskList.forEach( task => { 

      const [year,month,day,hour,minute] = this.dateFormatter.toNumberFormat(task.date, task.hour);
      

      if(new Date() > new Date(year,month-1,day,hour,minute)  && !task.isCompleted){
        task.isExpired = true;
        task.isCompleted = true;

        task.title = task.title.concat('- Expirada');
        
      }

    })

    this.saveLocalStorage();
  }

  //*************************************Local Storage Stuff************************************************** */

  private saveLocalStorage():void{
    localStorage.setItem('TASKS_DB', JSON.stringify(this._taskList));
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('TASKS_DB')) return;

    this._taskList = JSON.parse(localStorage.getItem('TASKS_DB')!);
    
  }
  
}


  