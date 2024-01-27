import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateOrderRequest } from './dto/create-order.req';
import { OrdersRepository } from './repository/order.repository';
import { BILLING_SERVICE } from './constants/service';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  protected readonly logger = new Logger();
  constructor(
    private readonly ordersRepository: OrdersRepository,
    @Inject(BILLING_SERVICE) private billingClient: ClientProxy,
  ) {}

  async createOrder(req: CreateOrderRequest) {
    return this.ordersRepository.create(req);
  }
}
