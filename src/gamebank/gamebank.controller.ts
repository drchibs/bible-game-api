import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { GamebankService } from './gamebank.service';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { RolesGuard } from 'src/roles.guard';
import { Roles } from '../roles.decorator';
import { Role } from '../roles.enum';

@Controller('gamebank')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GamebankController {
  constructor(private readonly gamebankService: GamebankService) {}

  @Post()
  @Roles(Role.admin, Role.contributor)
  create(@Body() data) {
    return this.gamebankService.create(data);
  }

  @Get()
  findAll() {
    return this.gamebankService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamebankService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data) {
    return this.gamebankService.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamebankService.remove(+id);
  }
}