import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: 'sxaambclientprescription'})
export class Prescription {
  @Field()
  @PrimaryGeneratedColumn()
  PrescriptionID: number;

  @Field()
  @Column()
  DrugName: string;

  @Field()
  @Column()
  TouchedWhen: Date;

  @Field()
  @Column()
  TouchedBy: string;

  @Field()
  @Column()
  CreatedWhen: Date;

  @Field()
  @Column()
  CreatedBy: string;
}
