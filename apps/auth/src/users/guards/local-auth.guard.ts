import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users.service';

export class LocalAuthGuard extends AuthGuard('local') {
   constructor(private readonly userService: UsersService) {
     super()
   }
}
