import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'cv3user' })
export class User {
  @Field()
  @PrimaryColumn()
  GUID: number;

  @Field({ nullable: false })
  @Column()
  DisplayName: string;
}
