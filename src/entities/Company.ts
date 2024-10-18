import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Products";
@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.company, { cascade: true }) //cascade true means first we have to insert products then companyy
  products: Product[];
}
