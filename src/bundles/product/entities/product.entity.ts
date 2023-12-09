import { ObjectType, Field, Int } from '@nestjs/graphql';

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
@ObjectType() // object for saving in to the database
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field((type) => Int)
  quantity: number;
}
