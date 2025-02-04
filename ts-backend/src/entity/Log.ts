import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  inserted_at!: Date;

  @Column('json')
  json!: object;
}
