import { PartialType } from '@nestjs/swagger';
import { CreatePlaylogDto } from './create-playlog.dto';

export class UpdatePlaylogDto extends PartialType(CreatePlaylogDto) {}
