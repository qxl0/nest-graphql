import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsResolver } from './prescriptions.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prescription } from './entities/prescription.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prescription])],
  providers: [PrescriptionsResolver, PrescriptionsService]
})
export class PrescriptionsModule {}
