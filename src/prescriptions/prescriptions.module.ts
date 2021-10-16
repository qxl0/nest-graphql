import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsResolver } from './prescriptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';
import { SxaambClientPrescription } from './entities/SxaambClientPrescription.entity';
import { SxaambClientPrescriptionResolver } from './sxaambclientprescription.resolver';
import { SxaAmbClientPrescriptionService } from './sxaambclientprescription.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prescription, SxaambClientPrescription])],
  providers: [SxaambClientPrescriptionResolver, PrescriptionsResolver, 
    SxaAmbClientPrescriptionService,
    PrescriptionsService]
})
export class PrescriptionsModule {}
