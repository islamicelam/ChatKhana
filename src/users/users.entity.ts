import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Room} from "../rooms/rooms.entity";
@Entity({name: "users"})
export class User {
    @PrimaryGeneratedColumn('uuid')
    userId: number;
    @Column({nullable: false})
    username: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
    @ManyToMany(() => Room, room => room.users)
    @JoinTable()
    rooms: Room[];
}
