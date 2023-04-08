import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {RoomsEntity} from "../rooms/rooms.entity";
@Entity({name: "users"})
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    userId: number;
    @Column({nullable: false})
    username: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
    @ManyToMany(() => RoomsEntity, room => room.users)
    @JoinTable()
    rooms: RoomsEntity[];
}
