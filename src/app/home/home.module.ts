import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LiveClockComponent } from './components/live-clock/live-clock.component';
import { TaskScrollerComponent } from './components/task-scroller/task-scroller.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, LiveClockComponent, TaskScrollerComponent, AddTaskComponent, TaskCardComponent]
})
export class HomePageModule {}
