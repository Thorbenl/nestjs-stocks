import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { StockCreatedEvent } from '../events/stock-created.event';

@Injectable()
export class StockCreatedListener {
  @OnEvent('stock.created')
  handleStockCreatedEvent(event: StockCreatedEvent) {
    // handle and process "StockCreatedEvent" event
    console.log(event);
  }
}
