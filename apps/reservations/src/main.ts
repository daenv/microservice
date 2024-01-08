import { NestFactory } from '@nestjs/core';
import { ReservationsModule } from './reservations.module';
import { Logger } from 'nestjs-pino';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
   console.log('Starting reservations service...');
   const app = await NestFactory.create(ReservationsModule);
   app.connectMicroservice({
      transport: Transport.TCP
   })
   app.use(cookieParser())
   app.useGlobalPipes(new ValidationPipe());
   app.useLogger(app.get(Logger));
   const configService = app.get(ConfigService)
   await app.startAllMicroservices();
   await app.listen(configService.get('PORT'));
}
bootstrap();
