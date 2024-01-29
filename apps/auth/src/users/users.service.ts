import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './repository/users.repository';
import { CreateUserRequest } from './dto/create-user.dto';
import { User } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}
  private async validateCreateUserRequest(req: CreateUserRequest) {
    let user: User;
    try {
      user = await this.usersRepository.findOne({ email: req.email });
      if (user) {
        throw new Error('Email already exists');
      }
      return user;
    } catch (error) {}
  }
  async createUser(req: CreateUserRequest) {
    await this.validateCreateUserRequest(req);
    const user = await this.usersRepository.create({
      ...req,
      password: await bcrypt.hash(req.password, 10),
    });
    return user;
  }
  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      throw new UnauthorizedException('Credentials are not valid');
    }
    return user;
  }
  async getUser(getUserArgs: Partial<User>) {
    return this.usersRepository.findOne(getUserArgs);
  }
}
