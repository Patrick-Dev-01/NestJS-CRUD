import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Task } from './shared/task';
import { TaskService } from './shared/task.service';

// Rota
@Controller('tasks')
export class TasksController {
  constructor(private taskService: TaskService) {}

  //Rota do tipo get
  @Get()
  // retorno do metodo
  async getAll(): Promise<Task[]> {
    return this.taskService.getAll();
  }

  // Rota do tipo GET com paramêtro
  @Get(':id')
  // pegar o parametro 'id' e atribuir a variavel id
  async getById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getById(id);
  }

  @Post()
  // Pegar o corpo das tarefas
  async create(@Body() task: Task): Promise<Task> {
    return this.taskService.create(task);
  }

  // id da tarefa
  @Put(':id')
  // id da tarefa com os campos atualizados
  async update(@Param('id') id: number, @Body() task: Task): Promise<Task> {
    task.id = id;
    return this.taskService.update(task);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    this.taskService.delete(id);
  }
}
