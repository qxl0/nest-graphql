import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { SxaambClientPrescription } from './entities/SxaambClientPrescription.entity';

type PrescriptionSelectFilter = {
  page: number,
  count: number,
  whereConditions: string[]
};


@Injectable()
export class SxaAmbClientPrescriptionService {
  constructor(
    @InjectRepository(SxaambClientPrescription)
    private prescriptionRepository: Repository<SxaambClientPrescription>,
  ){}

  create(createPrescriptionInput: CreatePrescriptionInput) {
    return 'This action adds a new prescription';
  }

  findAll() {
    return this.prescriptionRepository.find();
  }

  findOne(id: number) {
    return this.prescriptionRepository.findOne(id);
  }

  async findByDrugName(drugname: string){
    var data = await this.prescriptionRepository
        .createQueryBuilder("rx")
        .where("rx.drugname like :name", {name: `%${drugname}%`})
        .getMany();
    return data;
  }

//   async findAllPage({
//     page,
//     count,
//     whereConditions
// }: PrescriptionSelectFilter): Promise<Prescription[]> {
//     return this.prescriptionRepository.find({
//         ...whereConditions,
//         take: count,
//         skip: (page - 1) * count,
//         order: {
//             DrugName: 'DESC',
//         },
//         where: {
//             ...(whereConditions.name !== undefined && { name: ILike(`%${whereConditions.name}%`) }),
//         }
//     });
// }
  update(id: number, updatePrescriptionInput: UpdatePrescriptionInput) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
