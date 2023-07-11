import { Injectable, NotFoundException } from "@nestjs/common";
import { BoardStatus } from "./board-status.enum";
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from "./dto/create-board.dto";

@Injectable()
export class BoardsService {
  // private boards: Board[] = [];
  //
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //
  // // 게시글 작성
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC
  //   }
  //
  //   this.boards.push(board);
  //   return board;
  // }
  //
  // // id값으로 특정 게시글 가져오기
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //
  //   // 찾는 게시글이 없는경우 예외처리
  //   if(!found) {
  //     throw new NotFoundException('찾을 수 없는 게시글입니다.');
  //   }
  //   return found;
  // }
  //
  // // id값으로 특정 게시글 삭제
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  //
  // // 특정 게시글 업데이트
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
