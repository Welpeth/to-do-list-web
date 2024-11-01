import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: Date;
}

@Component({
  selector: 'app-parent', // O seletor deve ser 'app-parent'
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  tasks: Task[] = [];
  newTaskTitle: string = '';
  newTaskDescription: string = '';
  constructor() {
    this.loadTasks(); // Carrega as tarefas ao iniciar o componente
  }

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: this.newTaskTitle,
        description: this.newTaskDescription,
        isCompleted: false,
        createdAt: new Date()
      };
      this.tasks.push(newTask);
      this.saveTasks(); // Salva as tarefas sempre que uma nova é adicionada
      this.newTaskTitle = '';
      this.newTaskDescription = '';
    }
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    this.saveTasks(); // Salva as tarefas após uma exclusão
  }

  toggleTaskCompletion(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.isCompleted = !task.isCompleted;
      this.saveTasks(); // Salva as tarefas após a alteração de status
    }
  }

  // Função para salvar tarefas no Local Storage
  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  // Função para carregar tarefas do Local Storage
  loadTasks() {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
  }
}

