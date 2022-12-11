import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventGateway } from './event/event.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [EventGateway, AppService],
})
export class AppModule {}
