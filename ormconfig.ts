import * as process from "process";
import {PostgresConnectionOptions} from "typeorm/driver/postgres/PostgresConnectionOptions";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import 'dotenv/config'

const config: PostgresConnectionOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
}

export default config;