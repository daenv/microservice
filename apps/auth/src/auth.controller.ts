import { Controller, Get, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './users/guards/local-auth.guard';
import { CurrentUser } from './current-user.decorator';
import { UserDocument } from './users/models/user.model';
import { Response } from 'express';

@Controller()
export class AuthController {
   constructor(private readonly authService: AuthService) {}

   @UseGuards(LocalAuthGuard)
   @Post()
   async login(@CurrentUser() user: UserDocument, @Res({ passthrough: true }) response: Response) {
      await this.authService.login(user, response);
      response.send(user);
   }
}
