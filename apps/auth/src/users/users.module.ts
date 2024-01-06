import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from '@app/common';
import { UserDocument, UserSchema } from './models/user.model';
import { UserRepository } from './users.repository';

@Module({
   imports: [
      DatabaseModule,
      DatabaseModule.forFeature([{ name: UserDocument.name, schema: UserSchema }]),
   ],
   controllers: [UsersController],
   providers: [UsersService, UserRepository ],
})
export class UsersModule {}