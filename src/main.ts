import { NestFactory, Reflector } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { DBService } from './db/db.service';
import helmet from 'helmet'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bible Game API')
    .setDescription(
      'This API was built with NestJS and Postgres and the Prisma ORM.',
    )
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  //app.useGlobalGuards(new RolesGuard());
  app.use(helmet());
  app.enableCors();
  const dbService: DBService = app.get(DBService);
  await dbService.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
