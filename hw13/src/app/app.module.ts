import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo-component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [TodoComponent, TaskDetailComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TodoComponent]
})
export class AppModule {
}
