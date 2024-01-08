import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { CurrentUser } from '../current-user.decorator';
import { UserDocument } from './models/user.model';

@Controller('users')
export class UsersController {
   constructor(private readonly userService: UsersService) {}
   @Post()
   async createUser(@Body() createUser: CreateUserDto) {
      return this.userService.createUser({
         ...createUser,
         password: await bcrypt.hash(createUser.password, 10),
      });
   }
   @Get()
   @UseGuards(JwtAuthGuard)
   async getUser(@CurrentUser() user: UserDocument){
      return user
   }
}
