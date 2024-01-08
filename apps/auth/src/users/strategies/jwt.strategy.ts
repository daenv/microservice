import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor(
      configService: ConfigService,
      private readonly usersService: UsersService,
   ) {
      super({
         jwtFromRequest: ExtractJwt.fromExtractors([
            (req: Request) => req?.cookies?.Authentication,
         ]),
         secretOrKey: configService.get('JWT_SECRET'),
      });
   }

   async validate({}) {}
}
