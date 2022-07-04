import { Module } from '@nestjs/common';
import { TagService } from './tag.service';
import { TagController } from './tag.controller';
import { DBService } from 'src/db/db.service';

@Module({
  controllers: [TagController],
  providers: [TagService, DBService],
})
export class TagModule {}
