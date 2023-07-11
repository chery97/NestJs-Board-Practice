import { Injectable, NotFoundException } from "@nestjs/common";
import { BoardStatus } from "./board-status.enum";
import { CreateBoardDto } from "./dto/create-board.dto";
import { BoardRepository } from "./board.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Board } from "./board.entity";

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // 모든 게시글 조회
  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  // 게시글 작성
  createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    // repository 패턴에 따른 db 관련 로직은 board.repository.ts에 작성
    return this.boardRepository.createBoard(createBoardDto);
  }

  // id값으로 특정 게시글 가져오기
  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne({ where: {id} });

    if (!found) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    return found;
  }

  // id값으로 특정 게시글 삭제
  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if(result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  // 특정 게시글 업데이트
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  // private boards: Board[] = [];
  //
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }

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

  // // id값으로 특정 게시글 삭제
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // // 특정 게시글 업데이트
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
