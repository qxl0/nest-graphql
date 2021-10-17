import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "@nestjs/graphql";

@Index("SXAAMBClientPrescriptionAI01", ["cdsUniqueIdguid"], {})
@Index(
  "SXAAMBClientPrescriptionAI02",
  ["careproviderGuid", "statusType", "transmissionStatus"],
  {}
)
@Index(
  "SXAAMBClientPrescriptionAI03",
  ["userGuid", "statusType", "transmissionStatus"],
  {}
)
@Index(
  "SXAAMBClientPrescriptionAI04",
  ["prescriptionId", "createdWhen", "statusType"],
  {}
)
@Index("SXAAMBClientPrescriptionAI05", ["dispensedDetailId"], {})
@Index(
  "SXAAMBClientPrescriptionAI06",
  [
    "renewalDate",
    "chartGuid",
    "userGuid",
    "careproviderGuid",
    "statusType",
    "createdWhen",
  ],
  {}
)
@Index(
  "SXAAMBClientPrescriptionCI",
  ["clientGuid", "clientVisitGuid", "prescriptionId"],
  { unique: true }
)
@Index(
  "SXAAMBClientPrescriptionNCCS",
  [
    "touchedBy",
    "touchedWhen",
    "createdBy",
    "createdWhen",
    "prescriptionId",
    "clientGuid",
    "chartGuid",
    "clientVisitGuid",
    "genericItemId",
    "genericNameId",
    "drugName",
    "doseAmount",
    "doseUomid",
    "scriptFrequencyId",
    "route",
    "durationAmount",
    "isContinuous",
    "quantityAmount",
    "refills",
    "instructions",
    "comments",
    "memo",
    "isDaw",
    "userGuid",
    "careproviderGuid",
    "startDate",
    "endDate",
    "renewalDate",
    "statusType",
    "prescriptionType",
    "csaSchedule",
    "dispensedUnits",
    "mSreplTranVersion",
    "formularyOrgName",
    "formularyDrugKey",
    "formularyBrandKey",
    "formularyStatus",
    "innerPackageSize",
    "innerPackageSizeUomid",
    "cdsUniqueIdguid",
    "manufacturerName",
    "transmissionStatus",
    "discontinueDate",
    "denialDate",
    "denialReason",
    "rxReferenceNumber",
    "pharmacist",
    "pharmacyId",
    "ndc",
    "lastRenewDate",
    "pharmacyMemo",
    "sourceCode",
    "sourceCodeType",
    "formularySourceType",
    "supervisorGuid",
    "sourceApplicationType",
    "isPrn",
    "prnReason",
    "selectedSubmitMethodType",
    "isStartDateApprox",
    "isEndDateApprox",
    "selectedProviderAddressGuid",
    "productRouteId",
    "clinicalRouteId",
    "startDateApproxType",
    "endDateApproxType",
    "isSig",
    "isTaperDose",
    "indicationForUse",
    "signedMessageId",
    "deaNumber",
    "mdd",
    "dispensedDetailId",
    "formularyQueryGeneratedType",
    "drugCoverageStatusCodeType",
    "communitySourceDocumentGuid",
    "originatingSource",
    "priorAuthorizationNumber",
    "priorAuthorizationStatusCode",
    "eRxStructuredSigId",
    "representativeNdc",
    "quantityUomid",
    "printReason",
    "transmissionDateUtc",
    "effectiveDateUtc",
    "isFreeTextSig",
    "freeTextSig",
    "isAutoCalc",
    "eRxTransDetailId",
    "response271Dtm",
    "doseCalcHeightCm",
    "doseCalcWeightKg",
    "rxNormCui",
    "rxNormQualifier",
  ],
  {}
)
@ObjectType()
@Index("SXAAMBClientPrescriptionPK", ["prescriptionId"], { unique: true })
@Entity("SXAAMBClientPrescription", { schema: "dbo" })
export class SxaambClientPrescription {
  @Field()
  @Column("smallint", {
    name: "SiteID",
    default: () => "[dbo].[SCMSiteIDFn]()",
  })
  siteId: number;

  @Field()
  @Column("int", { name: "Build" })
  build: number;

  @Field()
  @Column("varchar", { name: "TouchedBy", length: 50 })
  touchedBy: string;

  @Field()
  @Column("datetime", { name: "TouchedWhen", default: () => "getdate()" })
  touchedWhen: Date;

  @Field()
  @Column("varchar", { name: "CreatedBy", length: 50 })
  createdBy: string;
  @Field()
  @Column("datetime", { name: "CreatedWhen", default: () => "getdate()" })
  createdWhen: Date;
  
  @Field()
  @PrimaryGeneratedColumn({ type: "bigint", name: "PrescriptionID" })
  prescriptionId: string;
  @Field()
  @Column("numeric", { name: "ClientGUID", precision: 16, scale: 0 })
  clientGuid: number;
  @Field()
  @Column("numeric", { name: "ChartGUID", precision: 16, scale: 0 })
  chartGuid: number;
  @Field()
  @Column("numeric", { name: "ClientVisitGUID", precision: 16, scale: 0 })
  clientVisitGuid: number;
  @Field()
  @Column("int", { name: "GenericItemID", nullable: true })
  genericItemId: number | null;
  @Field()
  @Column("int", { name: "GenericNameID", nullable: true })
  genericNameId: number | null;
  
  @Field()
  @Column("varchar", { name: "DrugName", nullable: true, length: 255 })
  drugName: string | null;
  @Field()
  @Column("float", { name: "DoseAmount", nullable: true, precision: 53 })
  doseAmount: number | null;
  @Field()
  @Column("int", { name: "DoseUOMID", nullable: true })
  doseUomid: number | null;
  @Field()
  @Column("int", { name: "ScriptFrequencyID", nullable: true })
  scriptFrequencyId: number | null;
  @Field()
  @Column("varchar", { name: "Route", nullable: true, length: 255 })
  route: string | null;
  @Field()
  @Column("float", { name: "DurationAmount", nullable: true, precision: 53 })
  durationAmount: number | null;
  @Field()
  @Column("bit", { name: "IsContinuous", nullable: true })
  isContinuous: boolean | null;
  @Field()
  @Column("float", { name: "QuantityAmount", nullable: true, precision: 53 })
  quantityAmount: number | null;
  @Field()
  @Column("int", { name: "Refills", nullable: true })
  refills: number | null;
  @Field()
  @Column("varchar", { name: "Instructions", nullable: true, length: 4000 })
  instructions: string | null;
  @Field()
  @Column("varchar", { name: "Comments", nullable: true, length: 1000 })
  comments: string | null;
  @Field()
  @Column("varchar", { name: "Memo", nullable: true, length: 4000 })
  memo: string | null;
  @Field()
  @Column("bit", { name: "IsDaw", nullable: true })
  isDaw: boolean | null;
  @Field()
  @Column("numeric", { name: "UserGUID", precision: 16, scale: 0 })
  userGuid: number;
  @Field()
  @Column("numeric", { name: "CareproviderGUID", precision: 16, scale: 0 })
  careproviderGuid: number;
  @Field()
  @Column("datetime", { name: "StartDate", nullable: true })
  startDate: Date | null;
  @Field()
  @Column("datetime", { name: "EndDate", nullable: true })
  endDate: Date | null;
  @Field()
  @Column("datetime", { name: "RenewalDate", nullable: true })
  renewalDate: Date | null;
  @Field()
  @Column("int", { name: "StatusType" })
  statusType: number;
  @Field()
  @Column("int", { name: "PrescriptionType" })
  prescriptionType: number;
  @Field()
  @Column("smallint", { name: "CSASchedule" })
  csaSchedule: number;
  @Field()
  @Column("varchar", { name: "DispensedUnits", nullable: true, length: 50 })
  dispensedUnits: string | null;
  @Field()
  @Column("uniqueidentifier", {
    name: "MSrepl_tran_version",
    default: () => "newid()",
  })
  mSreplTranVersion: string;
  @Field()
  @Column("varchar", { name: "FormularyOrgName", nullable: true, length: 100 })
  formularyOrgName: string | null;
  @Field()
  @Column("varchar", { name: "FormularyDrugKey", nullable: true, length: 30 })
  formularyDrugKey: string | null;
  @Field()
  @Column("varchar", { name: "FormularyBrandKey", nullable: true, length: 30 })
  formularyBrandKey: string | null;
  @Field()
  @Column("varchar", { name: "FormularyStatus", nullable: true, length: 100 })
  formularyStatus: string | null;
  @Field()
  @Column("numeric", {
    name: "InnerPackageSize",
    nullable: true,
    precision: 15,
    scale: 3,
  })
  innerPackageSize: number | null;
  @Field()
  @Column("int", { name: "InnerPackageSizeUOMID", nullable: true })
  innerPackageSizeUomid: number | null;
  @Field()
  @Column("numeric", {
    name: "CDSUniqueIDGUID",
    nullable: true,
    precision: 16,
    scale: 0,
  })
  cdsUniqueIdguid: number | null;
  @Field()
  @Column("varchar", { name: "ManufacturerName", nullable: true, length: 100 })
  manufacturerName: string | null;
  @Field()
  @Column("smallint", { name: "TransmissionStatus", nullable: true })
  transmissionStatus: number | null;
  @Field()
  @Column("datetime", { name: "DiscontinueDate", nullable: true })
  discontinueDate: Date | null;
  @Field()
  @Column("datetime", { name: "DenialDate", nullable: true })
  denialDate: Date | null;
  @Field()
  @Column("varchar", { name: "DenialReason", nullable: true, length: 255 })
  denialReason: string | null;
  @Field()
  @Column("varchar", { name: "RxReferenceNumber", nullable: true, length: 35 })
  rxReferenceNumber: string | null;
  @Field()
  @Column("varchar", { name: "Pharmacist", nullable: true, length: 125 })
  pharmacist: string | null;
  @Field()
  @Column("int", { name: "PharmacyID", nullable: true })
  pharmacyId: number | null;
  @Field()
  @Column("varchar", { name: "NDC", nullable: true, length: 35 })
  ndc: string | null;
  @Field()
  @Column("datetime", { name: "LastRenewDate", nullable: true })
  lastRenewDate: Date | null;
  @Field()
  @Column("varchar", { name: "PharmacyMemo", nullable: true, length: 4000 })
  pharmacyMemo: string | null;
  @Field()
  @Column("varchar", { name: "SourceCode", nullable: true, length: 100 })
  sourceCode: string | null;
  @Field()
  @Column("int", { name: "SourceCodeType", nullable: true })
  sourceCodeType: number | null;
  @Field()
  @Column("int", { name: "FormularySourceType", nullable: true })
  formularySourceType: number | null;
  @Field()
  @Column("numeric", {
    name: "SupervisorGUID",
    nullable: true,
    precision: 16,
    scale: 0,
  })
  supervisorGuid: number | null;
  @Field()
  @Column("int", { name: "SourceApplicationType", nullable: true })
  sourceApplicationType: number | null;
  @Field()
  @Column("bit", { name: "IsPrn", nullable: true, default: () => "(0)" })
  isPrn: boolean | null;
  @Field()
  @Column("varchar", { name: "PrnReason", nullable: true, length: 500 })
  prnReason: string | null;
  @Field()
  @Column("int", { name: "SelectedSubmitMethodType", nullable: true })
  selectedSubmitMethodType: number | null;
  @Field()
  @Column("bit", {
    name: "IsStartDateApprox",
    nullable: true,
    default: () => "(0)",
  })
  isStartDateApprox: boolean | null;
  @Field()
  @Column("bit", {
    name: "IsEndDateApprox",
    nullable: true,
    default: () => "(0)",
  })
  isEndDateApprox: boolean | null;
  @Field()
  @Column("numeric", {
    name: "SelectedProviderAddressGUID",
    nullable: true,
    precision: 16,
    scale: 0,
  })
  selectedProviderAddressGuid: number | null;
  @Field()
  @Column("int", { name: "ProductRouteID", nullable: true })
  productRouteId: number | null;
  @Field()
  @Column("int", { name: "ClinicalRouteID", nullable: true })
  clinicalRouteId: number | null;
  @Field()
  @Column("int", { name: "StartDateApproxType", nullable: true })
  startDateApproxType: number | null;
  @Field()
  @Column("int", { name: "EndDateApproxType", nullable: true })
  endDateApproxType: number | null;
  @Field()
  @Column("bit", { name: "IsSIG", default: () => "(0)" })
  isSig: boolean;
  @Field()
  @Column("bit", { name: "IsTaperDose", default: () => "(0)" })
  isTaperDose: boolean;
  @Field()
  @Column("varchar", { name: "IndicationForUse", nullable: true, length: 1000 })
  indicationForUse: string | null;
  @Field()
  @Column("uniqueidentifier", { name: "SignedMessageID", nullable: true })
  signedMessageId: string | null;
  @Field()
  @Column("varchar", { name: "DEANumber", nullable: true, length: 50 })
  deaNumber: string | null;
  @Field()
  @Column("varchar", { name: "MDD", nullable: true, length: 500 })
  mdd: string | null;
  @Field()
  @Column("bigint", { name: "DispensedDetailID", nullable: true })
  dispensedDetailId: string | null;
  @Field()
  @Column("uniqueidentifier", {
    name: "MSReplrowguid",
    nullable: true,
    default: () => "newsequentialid()",
  })
  msReplrowguid: string | null;
  @Field()
  @Column("int", { name: "FormularyQueryGeneratedType", default: () => "(0)" })
  formularyQueryGeneratedType: number;
  @Field()
  @Column("int", { name: "DrugCoverageStatusCodeType", nullable: true })
  drugCoverageStatusCodeType: number | null;
  @Field()
  @Column("numeric", {
    name: "CommunitySourceDocumentGUID",
    nullable: true,
    precision: 16,
    scale: 0,
  })
  communitySourceDocumentGuid: number | null;
  @Field()
  @Column("varchar", { name: "OriginatingSource", nullable: true, length: 50 })
  originatingSource: string | null;
  @Field()
  @Column("varchar", {
    name: "PriorAuthorizationNumber",
    nullable: true,
    length: 50,
  })
  priorAuthorizationNumber: string | null;
  @Field()
  @Column("char", {
    name: "PriorAuthorizationStatusCode",
    nullable: true,
    length: 1,
  })
  priorAuthorizationStatusCode: string | null;
  @Field()
  @Column("int", { name: "eRxStructuredSigID", nullable: true })
  eRxStructuredSigId: number | null;
  @Field()
  @Column("varchar", { name: "RepresentativeNDC", nullable: true, length: 35 })
  representativeNdc: string | null;
  @Field()
  @Column("int", { name: "QuantityUOMID", nullable: true })
  quantityUomid: number | null;
  @Field()
  @Column("varchar", { name: "PrintReason", nullable: true, length: 255 })
  printReason: string | null;
  @Field()
  @Column("datetimeoffset", { name: "TransmissionDateUTC", nullable: true })
  transmissionDateUtc: Date | null;
  @Field()
  @Column("datetimeoffset", { name: "EffectiveDateUTC", nullable: true })
  effectiveDateUtc: Date | null;
  @Field()
  @Column("bit", { name: "IsFreeTextSig", default: () => "(1)" })
  isFreeTextSig: boolean;
  @Field()
  @Column("varchar", { name: "FreeTextSig", nullable: true, length: 4000 })
  freeTextSig: string | null;
  @Field()
  @Column("bit", { name: "IsAutoCalc", default: () => "(0)" })
  isAutoCalc: boolean;
  @Field()
  @Column("int", { name: "eRXTransDetailID", nullable: true })
  eRxTransDetailId: number | null;
  @Field()
  @Column("datetime", { name: "Response271DTM", nullable: true })
  response271Dtm: Date | null;
  @Field()
  @Column("numeric", {
    name: "DoseCalcHeightCm",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  doseCalcHeightCm: number | null;
  @Field()
  @Column("numeric", {
    name: "DoseCalcWeightKg",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  doseCalcWeightKg: number | null;
  @Field()
  @Column("varchar", { name: "RxNormCUI", nullable: true, length: 20 })
  rxNormCui: string | null;
  @Field()
  @Column("varchar", { name: "RxNormQualifier", nullable: true, length: 40 })
  rxNormQualifier: string | null;
}
