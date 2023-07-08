import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from "./board.model";
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  // 게시글 작성
  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;
    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC
    }

    this.boards.push(board);
    return board;
  }

  // id값으로 특정 게시글 가져오기
  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  // id값으로 특정 게시글 삭제
  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }
}
