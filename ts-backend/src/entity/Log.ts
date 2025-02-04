import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

/* By default, when you define columns in
TypeORM like this and do not specify nullable: true, 
the columns are treated as NOT NULL. 
This means they must have a value 
when a new record is inserted, 
fulfilling your requirement 
that all columns have the NOT NULL constraint.*/
@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id!: number; // Automatically increments and acts as a primary key. Cannot be null.

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  inserted_at!: Date; // 'timestamptz' column, defaults to current timestamp on insertion. Cannot be null.

  @Column('json')
  json!: object; // 'json' column, required to store JSON data. Cannot be null.
}
