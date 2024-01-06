import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
   console.log('Starting reservations service...');
   const app = await NestFactory.create(ReservationsModule);
   app.useGlobalPipes(new ValidationPipe());
   app.useLogger(app.get(Logger));
   await app.listen(3000);
}
bootstrap();