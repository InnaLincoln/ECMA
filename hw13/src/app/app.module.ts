import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TaskAddingComponent } from './task-adding/task-adding.component';
import { AppServiceService } from './app-service.service';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [AppComponent, TaskDetailComponent, NotFoundComponent, TaskAddingComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
