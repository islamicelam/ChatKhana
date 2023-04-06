import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class RoomsEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Column({nullable: false})
    roomName: string;
}
