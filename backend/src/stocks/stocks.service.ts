import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Stock } from '../stocks/entities/stock.entity';
import { CreateStockDto } from './dto/create-stock.dto';
import { StockCreatedEvent } from './events/stock-created.event';

@Injectable()
export class StocksService {
  public stocks: Stock[] = [
    {
      id: 1,
      symbol: 'Stock #1',
      bid: 500,
      ask: 500,
    },
    {
      id: 2,
      symbol: 'Order #2',
      bid: 500,
      ask: 500,
    },
  ];

  constructor(private eventEmitter: EventEmitter2) {}

  create(createStockDto: CreateStockDto) {
    const stock = {
      id: this.stocks.length + 1,
      ...createStockDto,
    };
    this.stocks.push(stock);

    const stockCreatedEvent = new StockCreatedEvent();
    stockCreatedEvent.symbol = stock.symbol;
    stockCreatedEvent.ask = stock.ask;
    stockCreatedEvent.bid = stock.bid;

    this.eventEmitter.emit('stock.created', stockCreatedEvent);

    return stock;
  }
}
