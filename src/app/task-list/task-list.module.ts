import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { TaskSnippetComponent } from './components/task-snippet/task-snippet.component';
import { IonicModule } from '@ionic/angular';
import { SearchBarComponent } from './components/search-bar/search-bar.component';



@NgModule({
  declarations: [
    TaskListPageComponent,
    TaskSnippetComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    TaskListPageComponent
  ]
})
export class TaskListModule { }
