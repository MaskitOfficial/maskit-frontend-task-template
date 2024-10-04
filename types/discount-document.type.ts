import { DiscountEligibility } from "./discount-eligibility.type";
import { Ticket } from "./ticket.type";
import { User, UserGender } from "./user.type";

export enum DiscountDocumentStatus {
  PENDING = "PENDING",
  UPLOADED = "UPLOADED",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
}

export enum VerificationStatus {
  PENDING = "PENDING",
  VERIFIED = "VERIFIED",
  FAILED = "FAILED",
}

export enum FileType {
  IMAGE = "IMAGE",
}

export function getRetentionDays(period: DocumentRetentionPeriod): number {
  switch (period) {
    case DocumentRetentionPeriod.SIX_MONTHS:
      return 180;
    case DocumentRetentionPeriod.ONE_YEAR:
      return 365;
    case DocumentRetentionPeriod.TWO_YEARS:
      return 730;
    default:
      throw new Error("Invalid retention period");
  }
}

export enum DocumentRetentionPeriod {
  SIX_MONTHS = "SIX_MONTHS",
  ONE_YEAR = "ONE_YEAR",
  TWO_YEARS = "TWO_YEARS",
}

export interface DiscountDetails {
  approved_by?: string;
  approved_at?: Date;
  rejected_by?: string;
  rejected_at?: Date;
  valid_from?: Date;
  valid_until?: Date;
  additional_info_request?: string;
  resubmission_deadline?: Date;
}

export interface AdminAction {
  timestamp: Date;
  officer_uuid: string;
  comment: string;
  status_change?: VerificationStatus;
}

export interface VerificationAttempt {
  timestamp: Date | string;
  request: unknown;
  response: unknown;
  status: VerificationStatus;
  admin_actions: AdminAction[];
  task_id?: string | null;
}

export interface Companion {
  name: string;
  birth_date: string;
  gender: UserGender;
  phone_number?: string;
}

export interface DocumentFile {
  uuid: string;
  discount_document_uuid: string;
  file_path: string;
  file_type: FileType;
  uploaded_at: Date;
}

export interface DiscountDocument {
  uuid: string;
  user_uuid: string;
  box_office_uuid: string;
  discount_policy_uuid: string;
  discount_application_uuid: string;
  ticket_uuid?: string;
  discount_eligibility_uuid?: string;
  status: DiscountDocumentStatus;
  details: DiscountDetails;
  bundle_id?: string;
  created_at: Date;
  updated_at: Date;
}

export interface DiscountDocumentPopulateOptions {
  user?: boolean;
  ticket?: boolean;
  discount_eligibility?: boolean;
  files?: boolean;
}

type PopulatedFields<O extends DiscountDocumentPopulateOptions> = {
  user: O["user"] extends true ? User : undefined;
  ticket: O["ticket"] extends true ? Ticket : undefined;
  discount_eligibility: O["discount_eligibility"] extends true
    ? DiscountEligibility
    : undefined;
  files: O["files"] extends true ? DocumentFile[] : undefined;
};

export type PopulatedDiscountDocument<
  O extends DiscountDocumentPopulateOptions = Record<string, never>
> = DiscountDocument & PopulatedFields<O>;
