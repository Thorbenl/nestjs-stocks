import {Controller, Get, MessageEvent, Res, Sse} from '@nestjs/common';
import {Response} from 'express';
import {readFileSync} from 'fs';
import {join} from 'path';
import {interval, Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from './app.service';
import {OnEvent} from "@nestjs/event-emitter";
import {StockCreatedEvent} from "./stocks/events/stock-created.event";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Sse('sse')
  @OnEvent('stock.created')
  sse(event: StockCreatedEvent): Observable<MessageEvent> {
    return interval(1000).pipe(map((_) => ({ data: { hello: 'world' } })));
  }
}
