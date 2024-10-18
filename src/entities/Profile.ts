import {PrimaryGeneratedColumn } from "typeorm";
import {Entity} from "typeorm";
import {Column} from "typeorm";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    filename: string

    @Column()
    views: number

    @Column()
    isPublished: boolean
}