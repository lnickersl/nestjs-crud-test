import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor() {}

  create(createTaskDto: CreateTaskDto) {
    // return this.prisma.task.create({ data: createTaskDto });
  }

  findAll() {
    // return this.prisma.task.findMany();
  }

  findOne(id: number) {
    // return this.prisma.task.findUnique({ where: { id } });
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    // return this.prisma.task.update({ where: { id }, data: updateTaskDto });
  }

  remove(id: number) {
    // return this.prisma.task.delete({ where: { id } });
  }
}
