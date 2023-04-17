import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Column()
    name: string;
    @Column()
    text: string;
}
