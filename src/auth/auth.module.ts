import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { DBModule } from 'src/db/db.module';

@Module({
  imports: [UserModule, DBModule],
  providers: [AuthService],
})
export class AuthModule {}
