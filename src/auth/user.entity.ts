import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
// 중복확인 쿼리를 날리지 않고 한번에 중복인지 확인 가능
// 대신 repository에서 try catch로 에러를 잡아줘야 오류가 나지 않는다.
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
}