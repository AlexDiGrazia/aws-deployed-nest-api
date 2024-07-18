import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddTodosTable1719972234963 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
