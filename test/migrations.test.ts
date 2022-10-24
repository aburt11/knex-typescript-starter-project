import { runMigrations } from "../src/migrations";
import Knex from "Knex";

describe("Test migrations.", () => {

  it("Should run migrations without error.", async () => {
       const knex = Knex({
        client: "pg",
        connection: {  host : 'localhost',
    port : 5432,
    user : 'root',
    password : 'Password',
    database : 'kashmirDEV'
 },
        pool: { min: 1, max: 1 },
        useNullAsDefault: true,
    });

    await runMigrations({ knex });
    await knex.destroy();
  });

});
