import { Injectable } from '@nestjs/common';
import { ReservationsRepository } from './repository';
import { createReservationDto } from './dtos/create-reservation.dto';
import { UserDto } from '@app/common/dto/user.dto';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationsRepository: ReservationsRepository,
  ) {}

  async create(
    createReservationDto: createReservationDto,
    { email, _id: userId }: UserDto,
  ) {}

  async findAll() {
    return this.reservationsRepository.find({});
  }

  async findOne(_id: string) {
    return this.reservationsRepository.findOne({ _id });
  }
}
