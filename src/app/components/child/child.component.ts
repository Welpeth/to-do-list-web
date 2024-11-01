import { Component, Input, Output, EventEmitter } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleTaskCompletion = new EventEmitter();

  onDelete() {
    this.deleteTask.emit();
  }

  onToggleCompletion() {
    this.toggleTaskCompletion.emit();
  }
}
