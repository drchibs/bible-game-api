import { Injectable } from '@nestjs/common';
import { CreatePlaylogDto } from './dto/create-playlog.dto';
import { UpdatePlaylogDto } from './dto/update-playlog.dto';

@Injectable()
export class PlaylogService {
  create(createPlaylogDto: CreatePlaylogDto) {
    return 'This action adds a new playlog';
  }

  findAll() {
    return `This action returns all playlog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playlog`;
  }

  update(id: number, updatePlaylogDto: UpdatePlaylogDto) {
    return `This action updates a #${id} playlog`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlog`;
  }
}
