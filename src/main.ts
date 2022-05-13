import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DBService } from './db/db.service';
import { RolesGuard } from './roles.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalGuards(new RolesGuard(new Reflector()));
  const dbService: DBService = app.get(DBService);
  await dbService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
