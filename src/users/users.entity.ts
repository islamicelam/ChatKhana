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
    // @ManyToMany(() => Room, rooms => rooms.users, {nullable: true})
    // @JoinTable({
    //     name: "users_rooms",
    //     joinColumn: { name: "usersUserId", referencedColumnName: "userId"},
    //     inverseJoinColumn: { name: "roomsRoomId", referencedColumnName: "roomId"}
    // })
    // rooms: Room[];
}
