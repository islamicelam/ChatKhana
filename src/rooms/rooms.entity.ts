import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "../users/users.entity";
@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    roomId: number;
    @Column({nullable: false})
    roomName: string;
    @Column({nullable: true})
    description: string;
    @ManyToOne(() => User)
    @JoinColumn({name: "owner_id"})
    owner: User;
    @Column({name: "owner_id"})
    ownerId: number;

    @ManyToMany(() => User)
    @JoinTable()
    users: User[];
}
