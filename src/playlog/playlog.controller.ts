import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlaylogService } from './playlog.service';
import { CreatePlaylogDto } from './dto/create-playlog.dto';
import { UpdatePlaylogDto } from './dto/update-playlog.dto';

@Controller('playlog')
export class PlaylogController {
  constructor(private readonly playlogService: PlaylogService) {}

  @Post()
  create(@Body() createPlaylogDto: CreatePlaylogDto) {
    return this.playlogService.create(createPlaylogDto);
  }

  @Get()
  findAll() {
    return this.playlogService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playlogService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaylogDto: UpdatePlaylogDto) {
    return this.playlogService.update(+id, updatePlaylogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playlogService.remove(+id);
  }
}
