import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';

@Component({
  selector: 'task-details',
  standalone: true,
  imports: [CommonModule, TaskDetailsComponent], 
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
 })

export class TaskDetailsComponent {

  @Input()
  task: Task  | null = null;

}
