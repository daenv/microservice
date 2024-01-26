import { Injectable, Logger } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.req';
import { OrdersRepository } from './repository/order.repository';

@Injectable()
export class OrdersService {
  protected readonly logger = new Logger();
  constructor(private readonly ordersRepository: OrdersRepository) {}

  async createOrder(req: CreateOrderRequest) {
    return this.ordersRepository.create(req);
  }
}
