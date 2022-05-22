import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { Roles } from '../roles.decorator';
import { Role } from '../roles.enum';
import { RolesGuard } from 'src/roles.guard';

@Controller('users')
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
  @UseGuards(JwtAuthGuard)
  findAll(@Param() params) {
    return this.userService.getUsers(params);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.admin, Role.contributor)
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
