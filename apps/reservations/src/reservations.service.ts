import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './repository';
import { createReservationDto } from './dtos/create-reservation.dto';

@Injectable()
export class ReservationsService {
  constructor(private readonly reservationsRepository: ReservationsRepository ){}

  async create(createReservationDto: createReservationDto , { email, _id: userId}: UserDto){

  }
}
