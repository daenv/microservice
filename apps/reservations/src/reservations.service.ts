import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservations.repository';

@Injectable()
export class ReservationsService {
   constructor(private readonly reservationsRespository: ReservationRepository) {}
   create(createReservationDto: CreateReservationDto) {
      return this.reservationsRespository.create({
         ...createReservationDto,
         userId: '123',
         timestamp: new Date(),
      });
   }

   findAll() {
      return this.reservationsRespository.find({});
   }

   findOne(_id: string) {
      return this.reservationsRespository.findOne({ _id });
   }

   update(_id: string, updateReservationDto: UpdateReservationDto) {
      return this.reservationsRespository.findOneAndUpdate(
         { _id },
         { $set: updateReservationDto, timestamp: new Date() },
      );
   }

   remove(_id: string) {
      return this.reservationsRespository.findOneAndDelete({ _id });
   }
}
