import { Module } from '@nestjs/common';
import { PlaylogService } from './playlog.service';
import { PlaylogController } from './playlog.controller';
import { DBService } from 'src/db/db.service';

@Module({
  controllers: [PlaylogController],
  providers: [PlaylogService, DBService],
})
export class PlaylogModule {}
