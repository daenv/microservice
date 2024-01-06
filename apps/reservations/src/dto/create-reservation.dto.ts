import { IsString } from 'class-validator';

export class CreateReservationDto {
   startDate: Date;
   endDate: Date;
   @IsString()
   placeId: string;
   @IsString()
   invoiceId: string;
}
