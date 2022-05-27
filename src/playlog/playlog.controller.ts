import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from "@nestjs/common";
import { PlaylogService } from './playlog.service';
import { CreatePlaylogDto } from './dto/create-playlog.dto';
import { UpdatePlaylogDto } from './dto/update-playlog.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { RolesGuard } from '../roles.guard';

@ApiBearerAuth()
@Controller('playlog')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PlaylogController {
  constructor(private readonly playlogService: PlaylogService) {}

  @Post()
  create(@Body() createPlaylogDto: CreatePlaylogDto) {
    return this.playlogService.create(createPlaylogDto);
  }

  @Get()
  findAll(@Param() params) {
    return this.playlogService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaylogDto: UpdatePlaylogDto) {
    return this.playlogService.update(+id, updatePlaylogDto);
  }

  /*@Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlogService.remove(+id);
  }*/
}
