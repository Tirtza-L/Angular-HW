import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'task-details',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
 })

export class TaskDetailsComponent {

  @Input()
  task: Task  | null = null;

  @Output()
  onSaveNewTask: EventEmitter<Task> = new EventEmitter();

  saveNewTask()
  {
    if (this.task && this.task.name) {
      const newTask: Task = {
        id: Math.floor(Math.random() * 100) + 1,
        name: this.task.name
      };
      this.onSaveNewTask.emit(newTask);
    }
  }

  @Output()
  onFirstFocus = new EventEmitter<any>();
  firsrFocusEmitted = false;
  inputFocus()
  {
        if (!this.firsrFocusEmitted) {
      this.onFirstFocus.emit(); // Emit the event
      this.firsrFocusEmitted = true;
    }
  }


}
