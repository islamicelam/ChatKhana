import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: string;
    @Column({nullable: false})
    username: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
}
