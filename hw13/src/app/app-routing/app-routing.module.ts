import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';
import {TaskAddingComponent} from '../task-adding/task-adding.component';
import {NotFoundComponent} from '../not-found/not-found.component';
import { Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'task-adding', component: TaskAddingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
