import * as process from "process";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import 'dotenv/config'

const config: PostgresConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["dist/**/*.entity{.ts,.js}"],
    migrations: ['dist/migrations/**/*.js'],
    migrationsRun: true,
    migrationsTableName: 'migrations',
    synchronize: true,
}

export default config;