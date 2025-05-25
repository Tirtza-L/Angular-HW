import { Component } from '@angular/core';
import { Task } from './task.model';
import { TaskListComponent } from './task-list/task-list.component'
//import { RouterOutlet } from '@angular/router';

@Component({
  // template: "<h1>{{title}}</h1>",
  templateUrl: "app.component.html",
  selector: "app-root",
  //standalone: true, // If using standalone components
  imports: [TaskListComponent] // Add TaskListComponent here if it's standalone
})

export class AppComponent {
  x: number = 5;

  title: string = "hello!! this is startApp"

  calc(){
    return 0;
  }

  constructor()
  {

  }
}
