import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'task-list',
  imports: [CommonModule], // Add CommonModule here
  // imports: [],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent /*implements OnInit*/{

  tasks: Task[] = [{id:1, name:"first"}, {id:2, name:"second"}, {id:3, name:"third"}];

  constructor(){}
  //ngOnInit(): void{}
}
