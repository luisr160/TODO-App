import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskSnippetComponent } from './components/task-snippet/task-snippet.component';
import { FormsModule} from '@angular/forms';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { TaskListPageRoutingModule } from './task-list-routing.module';
import { IonicModule } from '@ionic/angular';
import { TaskDetailsModalComponent } from './components/task-details-modal/task-details-modal.component';



@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskSnippetComponent,
    SearchBarComponent,
    TaskDetailsModalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TaskListPageRoutingModule,
    FormsModule
  ],
  exports:[
    TaskListPageComponent
  ]
})
export class TaskListPageModule { }
