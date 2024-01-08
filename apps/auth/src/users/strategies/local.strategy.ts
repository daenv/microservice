import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UsersService } from '../users.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
   constructor(private readonly userService: UsersService) {
      super({ usernameField: 'username' });
   }
   async validate(username: string, password: string) {
      try {
         return this.userService.veryfyUser(username, password);
      } catch (error) {
         console.log('Error', error);
      }
   }
}
