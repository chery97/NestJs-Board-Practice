import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { BoardsService } from "./boards.service";
import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardStatusValidationPipe } from "./pipes/board-status-validation.pipe";
import { Board } from "./board.entity";

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  // 모든 게시글 조회
  @Get('/')
  getAllBoard(): Promise<Board[]> {
    return this.boardsService.getAllBoards();
  }

  // 게시글 작성
  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto);
  }

  // id값으로 특정 게시글 조회
  @Get('/:id')
  getBoardById(@Param('id') id: number) : Promise<Board> {
    return this.boardsService.getBoardById(id)
  }

  // id값으로 특정 게시글 삭제
  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.boardsService.deleteBoard(id);
  }

  // 특정 게시글 상태값 변경
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }

  // // 게시글 작성
  // @Post()
  // @UsePipes(ValidationPipe) // 핸들러 레벨 유효성 체크
  // createBoard(
  //   @Body() createBoardDto: CreateBoardDto
  // ): Board {
  //   return this.boardsService.createBoard(createBoardDto);
  // }

  // // id값으로 특정 게시글 조회
  // @Get('/:id')
  // getBoardById(@Param('id') id: string): Board {
  //   return this.boardsService.getBoardById(id);
  // }

  // // id값으로 특정 게시글 삭제
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }

  // // 특정 게시글 상태값 변경
  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus
  // ) {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
