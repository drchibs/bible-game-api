import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DBModule } from './db/db.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles.guard';

@Module({
  imports: [UserModule, AuthModule, DBModule],
  /*providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],*/
})
export class AppModule {}
