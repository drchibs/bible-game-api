import { Module } from '@nestjs/common';
import { PlaylogService } from './playlog.service';
import { PlaylogController } from './playlog.controller';

@Module({
  controllers: [PlaylogController],
  providers: [PlaylogService]
})
export class PlaylogModule {}
