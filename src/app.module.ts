import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsService } from './boards/boards.service';
import { BoardsController } from './boards/boards.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "./config/ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig)],
  controllers: [AppController, BoardsController],
  providers: [AppService, BoardsService],
})
export class AppModule {}
