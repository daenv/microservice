import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule, AUTH_SERVICE ,JwtAuthGuard,LoggerModule } from '@app/common';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';
import { ReservationRepository } from './reservations.repository';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
   imports: [
      DatabaseModule,
      DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }]),
      LoggerModule,
      ConfigModule.forRoot({
         isGlobal: true,
         validationSchema: Joi.object({
            MONGO_URI: Joi.string().required(),
            PORT: Joi.number().required(),
         }),
      }),
      ClientsModule.register([{ name: AUTH_SERVICE, transport: Transport.TCP }]),
   ],
   controllers: [ReservationsController],
   providers: [ReservationsService, ReservationRepository, JwtAuthGuard],
})
export class ReservationsModule {}
