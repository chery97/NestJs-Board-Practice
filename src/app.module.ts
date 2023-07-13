import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardsService } from './boards/boards.service';
import { BoardsController } from './boards/boards.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { BoardsModule } from './boards/boards.module';
import ormconfig from "./config/ormconfig";
import { BoardRepository } from "./boards/board.repository";
import { AuthModule } from './auth/auth.module';
import { UserRepository } from "./auth/user.repository";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), BoardsModule, AuthModule],
  controllers: [AppController, BoardsController],
  providers: [AppService, BoardsService, BoardRepository, UserRepository],
})
export class AppModule {}
