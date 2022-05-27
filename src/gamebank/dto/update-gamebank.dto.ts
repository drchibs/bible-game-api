import { PartialType } from '@nestjs/swagger';
import { CreateGamebankDto } from './create-gamebank.dto';

export class UpdateGamebankDto extends PartialType(CreateGamebankDto) {}
