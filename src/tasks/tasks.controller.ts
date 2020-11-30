import { TaskService } from './shared/task.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Task } from './shared/task';

@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TaskService
  ) { }

  @Get()
  async getAll() : Promise<Task[]> {
    return this.taskService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) : Promise<Task> {
    return this.taskService.getById(id);
  }
}
