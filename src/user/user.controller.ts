import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { Roles } from '../roles.decorator';
import { Role } from '../roles.enum';
import { RolesGuard } from 'src/roles.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserObject } from './user.interface';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(
    @Body()
    userData: CreateUserDto,
  ) {
    return this.userService.createUser(userData);
  }

  @Get()
  @Roles(Role.admin)
  findAll(@Param() params): Promise<UserObject[]> {
    return this.userService.getUsers(params);
  }

  @Get(':id')
  @Roles(Role.admin, Role.contributor, Role.player)
  findOne(@Param('id') id: string): Promise<UserObject> {
    return this.userService.getUser(+id);
  }

  @Patch(':id')
  @Roles(Role.admin, Role.contributor, Role.player)
  update(@Param('id') id: string, @Body() userData: UpdateUserDto): Promise<UserObject> {
    return this.userService.updateUser(+id, userData);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }*/
}
