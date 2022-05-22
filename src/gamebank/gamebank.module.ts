import { Module } from '@nestjs/common';
import { GamebankService } from './gamebank.service';
import { GamebankController } from './gamebank.controller';
import { DBService } from '../db/db.service';

@Module({
  controllers: [GamebankController],
  providers: [GamebankService, DBService],
})
export class GamebankModule {}
