import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PrescriptionsService } from './prescriptions.service';
import { Prescription } from './entities/prescription.entity';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';

@Resolver(() => Prescription)
export class PrescriptionsResolver {
  constructor(private readonly prescriptionsService: PrescriptionsService) {}

  @Mutation(() => Prescription)
  createPrescription(@Args('createPrescriptionInput') createPrescriptionInput: CreatePrescriptionInput) {
    return this.prescriptionsService.create(createPrescriptionInput);
  }

  @Query(() => [Prescription], { name: 'prescriptions' })
  findAll() {
    return this.prescriptionsService.findAll();
  }

  @Query(() => Prescription, { name: 'prescription' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionsService.findOne(id);
  }

  @Query(() => [Prescription])
  findByName(
    @Args('drugname') drugname: string
  ){
    return this.prescriptionsService.findByDrugName(drugname);
  }
  @Mutation(() => Prescription)
  updatePrescription(@Args('updatePrescriptionInput') updatePrescriptionInput: UpdatePrescriptionInput) {
    return this.prescriptionsService.update(updatePrescriptionInput.id, updatePrescriptionInput);
  }

  @Mutation(() => Prescription)
  removePrescription(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionsService.remove(id);
  }
}
