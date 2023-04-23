import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/users.entity";
@Entity({name: "rooms"})
export class Room {
    @PrimaryGeneratedColumn('uuid')
    roomId: string;
    @Column({nullable: false})
    roomName: string;
    @Column({nullable: true})
    description: string;
    @ManyToOne(() => User)
    @JoinColumn({name: "owner_id"})
    owner: User;
    @Column("uuid",{name: "owner_id"})
    ownerId: string;

    @ManyToMany(() => User)
    @JoinTable({
        name: "rooms_users",
        joinColumn: { name: "roomsRoomId", referencedColumnName: "roomId"},
        inverseJoinColumn: { name: "usersUserId", referencedColumnName: "userId" }
    })
    users: User[];
}
