import { Module } from '@nestjs/common';
import {StocksController} from "./stocks.controller";
import {StocksService} from "./stocks.service";
import {StockCreatedListener} from "./listeners/stock-created.listener";


@Module({
  controllers: [StocksController],
  providers: [StocksService, StockCreatedListener],
})
export class StocksModule {}
