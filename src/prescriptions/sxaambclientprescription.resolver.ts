import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SxaambClientPrescription } from './entities/SxaambClientPrescription.entity';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { SxaAmbClientPrescriptionService } from './sxaambclientprescription.service';

@Resolver(() => SxaambClientPrescription)
export class SxaambClientPrescriptionResolver {
  constructor(private readonly prescriptionsService: SxaAmbClientPrescriptionService) {}

  @Mutation(() => SxaambClientPrescription)
  createPrescription(@Args('createPrescriptionInput') createPrescriptionInput: CreatePrescriptionInput) {
    return this.prescriptionsService.create(createPrescriptionInput);
  }

  @Query(() => [SxaambClientPrescription], { name: 'SxaambClientPrescription' })
  findRxAll() {
    return this.prescriptionsService.findAll();
  }

  @Query(() => SxaambClientPrescription, { name: 'SxaambClientPrescription' })
  findRxOne(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionsService.findOne(id);
  }

  @Query(() => [SxaambClientPrescription])
  findRxByName(
    @Args('drugname') drugname: string
  ){
    return this.prescriptionsService.findByDrugName(drugname);
  }
  @Mutation(() => SxaambClientPrescription)
  updatePrescription(@Args('updatePrescriptionInput') updatePrescriptionInput: UpdatePrescriptionInput) {
    return this.prescriptionsService.update(updatePrescriptionInput.id, updatePrescriptionInput);
  }

  @Mutation(() => SxaambClientPrescription)
  removePrescription(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionsService.remove(id);
  }
}
