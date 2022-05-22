import { PartialType } from '@nestjs/mapped-types';
import { CreateGamebankDto } from './create-gamebank.dto';

export class UpdateGamebankDto extends PartialType(CreateGamebankDto) {}
