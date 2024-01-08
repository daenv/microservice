import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from '../users.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { TokenPayLoad } from '../interfaces/token-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
   constructor(
      configService: ConfigService,
      private readonly usersService: UsersService,
   ) {
      super({
         jwtFromRequest: ExtractJwt.fromExtractors([
            (req: any) => req?.cookies?.Authentication || req?.Authentication,
         ]),
         secretOrKey: configService.get('JWT_SECRET'),
      });
   }

   async validate({ userId }: TokenPayLoad) {
      return this.usersService.getUser({ _id: userId });
   }
}
