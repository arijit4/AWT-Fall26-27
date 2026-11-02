import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  fullName!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column()
  phone!: string;

  @Column()
  accountType!: string;

  @Column()
  address!: string;
}