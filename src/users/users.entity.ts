import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn('uuid')
    id: number;
    @Column({nullable: false})
    username: string;
    @Column({unique: true})
    email: string;
    @Column()
    password: string;
}
