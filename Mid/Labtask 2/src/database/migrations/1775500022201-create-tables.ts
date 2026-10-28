import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTable1775500022201 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "cars",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_V4()",
          },
          {
            name: "model",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "number_plate",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "price",
            type: "decimal",
            isNullable: false,
          },
          {
            name: "is_rented",
            type: "boolean",
            isNullable: false,
          },
        ],
      }),
    );


  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("cars");
  }
}
