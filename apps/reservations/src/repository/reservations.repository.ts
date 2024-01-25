import { AbstractRepository } from '@app/common';
import { ReservationsDocument } from '../models/reservation.schema';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

export class ReservationsRepository extends AbstractRepository<ReservationsDocument> {
  protected readonly logger = new Logger(ReservationsRepository.name);
  constructor(
    @InjectModel(ReservationsDocument.name)
    reservationModel: Model<ReservationsDocument>,
  ) {
    super(reservationModel);
  }
}
