import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
   constructor(private readonly userRespository: UserRepository) {}

   createUser(createUserDto: CreateUserDto) {
      return this.userRespository.create({
         ...createUserDto,
         timestamp: new Date(),
      });
   }
}
