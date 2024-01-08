import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { JwtAuthGuard } from '@app/common';

@Controller('reservations')
export class ReservationsController {
   constructor(private readonly reservationsService: ReservationsService) {}

   @UseGuards(JwtAuthGuard)
   @Post()
   create(@Body() createReservationDto: CreateReservationDto) {
      return this.reservationsService.create(createReservationDto);
   }

   @Get()
   findAll() {
      return this.reservationsService.findAll();
   }

   @Get(':id')
   findOne(@Param('id') _id: string) {
      return this.reservationsService.findOne(_id);
   }

   @Patch(':id')
   update(@Param('id') _id: string, @Body() updateReservationDto: UpdateReservationDto) {
      return this.reservationsService.update(_id, updateReservationDto);
   }

   @Delete(':id')
   remove(@Param('id') _id: string) {
      return this.reservationsService.remove(_id);
   }
}
