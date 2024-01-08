import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './users.repository';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { TokenPayLoad } from './interfaces/token-payload.interface';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UsersService {
   constructor(private readonly userRespository: UserRepository) {}

   async createUser(createUserDto: CreateUserDto) {
      return this.userRespository.create({
         ...createUserDto,
         timestamp: new Date(),
      });
   }

   async veryfyUser(username: string, password: string) {
      const user = await this.userRespository.findOne({ username });
      const passwordIsValid = await bcrypt.compare(password, user.password);

      try {
         if (!passwordIsValid) {
            throw new UnauthorizedException('Credentials are not valid.');
         }
         return user;
      } catch (error) {
         console.log('Error', error);
      }
   }
   async getUser({ _id }: GetUserDto) {
      return this.userRespository.findOne({ _id });
   }
}
