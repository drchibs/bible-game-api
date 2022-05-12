import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Body()
    userData,
  ) {
    return this.userService.createUser(userData);
  }

  @Get()
  findAll(@Param() params) {
    return this.userService.getUsers(params);
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.userService.getUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userData) {
    return this.userService.updateUser(+id, userData);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }*/
}
