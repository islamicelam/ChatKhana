import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {UsersEntity} from "../users/users.entity";
@Entity()
export class RoomsEntity {
    @PrimaryGeneratedColumn('uuid')
    roomId: number;
    @Column({nullable: false})
    roomName: string;
    @Column({nullable: true})
    description: string;
    @ManyToOne(() => UsersEntity)
    @JoinColumn({name: "owner_id"})
    owner: UsersEntity;
    @Column({name: "owner_id"})
    ownerId: number;

    @ManyToMany(() => UsersEntity)
    @JoinTable()
    users: UsersEntity[];
}
