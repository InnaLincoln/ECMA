import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div>
    <nav>
      <a routerLink=""></a>
      <a routerLink="/task-adding">Adding</a>
      <a routerLink="/task-done">Done</a>
      <a routerLink="/task-undone">Undone</a>
    </nav>
    <router-outlet></router-outlet>
  </div>`
   // templateUrl: 'app.component.html',
   // styleUrls: ['app.component.css']
})

export class AppComponent {
}
