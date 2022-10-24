import Knex from "knex";
import { runMigrations } from "./migrations";

async function main() {
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

    console.log(await knex.raw("SELECT 1;"));

    await knex.destroy();
}

main().then(() => console.log("done")).catch((e) => { throw e; });
