import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Profile } from "./Profile";
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  email: string;

  @OneToOne(() => Profile, { cascade: true, eager: true, onDelete: "CASCADE" }) //onDelete cascade means when that profile gets deleted then that mapped user will also gets deleted.
  @JoinColumn()
  profile: Profile;
}

//by default relation is lazy, but we can make it eager to eager true
//means no matter it will be sent with that qwury no matter if we are sending find or not, it will still map that condition
//Here cascade true means we don’t have to run insert query again in profile after doing cascade true, it means first transaction will gets inserted in profile table and then in users table, we don’t have to run query again.
