import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DBModule } from './db/db.module';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { GamebankModule } from './gamebank/gamebank.module';
import { PlaylogModule } from './playlog/playlog.module';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    DBModule,
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    GamebankModule,
    PlaylogModule,
    TagModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
