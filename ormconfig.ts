import {SqliteConnectionOptions} from "typeorm/driver/sqlite/SqliteConnectionOptions";
import {UsersEntity} from "./src/users/users.entity";

const config: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'mydb.sqlite',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: true,
}

export default config;