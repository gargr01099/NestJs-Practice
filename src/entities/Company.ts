import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Product} from  "./Products" ;
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  price: number;

@OneToMany(()=>Product,(product)=>product.company)
  products:Product[]
}
