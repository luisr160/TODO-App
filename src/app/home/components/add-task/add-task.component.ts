import { Component, OnInit } from '@angular/core';
import { Task_ } from '../../interfaces/task.interface';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { TaskManagerService } from '../../services/task-manager.service';
import { format } from 'date-fns';
import { Category } from '../../interfaces/categories.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public today:string = format(new Date(), "yyyy-LL-dd");

  public addTaskForm:FormGroup = new FormGroup({});

  public categories:Category[] = [];

  constructor(
    private formBuilder:FormBuilder, 
    private modalCtrl:ModalController, 
    private taskManager:TaskManagerService, 
    private toastCtrl: ToastController
    ) 
    { this.categories = taskManager.categories }

  ngOnInit(): void {
    this.addTaskForm = this.formBuilder.group({
      title:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
      date:['',Validators.required],
      hour:['',Validators.required],
    })
  }

  public onCancel():Promise<boolean>{
    console.log(this.addTaskForm.value)
    this.addTaskForm.reset();
    return this.modalCtrl.dismiss(null,'cancel');
  }

  submitForm():Promise<boolean>{
    this.taskManager.addTask({isCompleted:false, isExpired:false , ...this.addTaskForm.value});
    this.addTaskForm.reset();
    return this.modalCtrl.dismiss(null,'cancel');
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastCtrl.create({
      icon : 'checkmark-circle',
      color: 'light',
      message: '¡Tarea Agregada!',
      duration: 2000,
      position: position,
      cssClass: 'toast-task'
    });

    await toast.present();
  }
}
