import { Injectable } from '@nestjs/common';
import { Task } from './task';

// Regra de negócio
@Injectable()
export class TaskService {
  tasks: Task[] = [
    { id: 1, description: 'Tarefa 1', completed: false },
    { id: 2, description: 'Tarefa 2', completed: false },
    { id: 3, description: 'Tarefa 3', completed: true },
    { id: 4, description: 'Tarefa 4', completed: false },
    { id: 5, description: 'Tarefa 5', completed: false },
    { id: 6, description: 'Tarefa 6', completed: false },
    { id: 7, description: 'Tarefa 7', completed: false },
    { id: 8, description: 'Tarefa 8', completed: false },
    { id: 9, description: 'Tarefa 9', completed: false },
    { id: 10, description: 'Tarefa 10', completed: false },
  ];

  // Metodos
  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((t) => t.id == id);
    return task;
  }

  create(task: Task) {
    let lastId = 0;
    // Se existe tarefa no array
    if (this.tasks.length > 0) {
      // pega o ultimo id da tarefa
      lastId = this.tasks[this.tasks.length - 1].id;
    }

    task.id = lastId + 1;
    this.tasks.push(task);

    return task;
  }

  update(task: Task) {
    const taskArray = this.getById(task.id);
    // Se a taerfa existir
    if (taskArray) {
      taskArray.description = task.description;
      taskArray.completed = task.completed;
    }

    return taskArray;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((t) => t.id == id);
    this.tasks.splice(index, 1);
  }
}
