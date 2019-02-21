import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo';
import { TaskCheckingComponent } from './task-checking/task-checking.component';
import { TaskRemovingComponent } from './task-removing/task-removing.component';

@NgModule({
  declarations: [TodoComponent, TaskCheckingComponent, TaskRemovingComponent],
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
