import { Company } from "./Company";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @ManyToOne(() => Company, (company) => company.products)
  company: Company;
}
