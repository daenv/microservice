import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { DatabaseModule } from '@app/common/database';
import { ReservationDocument, ReservationSchema } from './models/reservation.schema';
import { ReservationRepository } from './reservations.repository';
import { LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
   imports: [
      DatabaseModule,
      DatabaseModule.forFeature([{ name: ReservationDocument.name, schema: ReservationSchema }]),
      LoggerModule,
      ConfigModule.forRoot({
         isGlobal: true,
         validationSchema: Joi.object({
            MONGO_URI: Joi.string().required(),
         }),
      }),
   ],
   controllers: [ReservationsController],
   providers: [ReservationsService, ReservationRepository],
})
export class ReservationsModule {}
