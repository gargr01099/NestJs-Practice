import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinTable,
  JoinColumn,
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

  @OneToOne(() => Profile, { cascade: true, eager: true })
  @JoinColumn()
  profile: Profile;
}

//by default relation is lazy, but we can make it eager to eager true
//means no matter it will be sent with that qwury no matter if we are sending find or not, it will still map that condition
