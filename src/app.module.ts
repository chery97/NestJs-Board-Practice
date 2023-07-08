import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsService } from './boards/boards.service';
import { BoardsController } from './boards/boards.controller';

@Module({
  imports: [],
  controllers: [AppController, BoardsController],
  providers: [AppService, BoardsService],
})
export class AppModule {}
