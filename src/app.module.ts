import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { DBModule } from './db/db.module';

@Module({
  imports: [UserModule, AuthModule, DBModule],
})
export class AppModule {}
