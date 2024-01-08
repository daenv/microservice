import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import * as bcrypt from 'bcryptjs';

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
}
