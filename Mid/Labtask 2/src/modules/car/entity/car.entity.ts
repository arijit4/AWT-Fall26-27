import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "cars" })
export class Car {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  model!: string;

  @Column()
  number_plate!: string;

  @Column()
  price!: number;

  @Column()
  is_rented!: boolean;
}
