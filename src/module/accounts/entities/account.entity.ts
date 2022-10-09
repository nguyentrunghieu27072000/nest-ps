import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn('uuid')
  accountId: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'role' })
  role: string;
}
