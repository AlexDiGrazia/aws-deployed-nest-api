"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTodosTable1719972234963 = void 0;
class AddTodosTable1719972234963 {
    constructor() {
        this.name = 'AddTodosTable1719972234963';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "done" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "todo"`);
    }
}
exports.AddTodosTable1719972234963 = AddTodosTable1719972234963;
//# sourceMappingURL=1719972234963-add-todos-table.js.map