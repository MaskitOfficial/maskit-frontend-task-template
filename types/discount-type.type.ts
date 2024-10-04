import {
  ApplicationScope,
  BundleVerificationType,
} from "./discount-policy.type";

export interface RequiredDocument {
  name: string;
  description: string;
  required?: boolean;
}

export interface DiscountType {
  uuid: string;
  box_office_uuid: string;
  application_scope: ApplicationScope;
  name: string;
  description: string;
  required_documents: RequiredDocument[];
  allowed_bundle_verification_types: BundleVerificationType[];
  created_at: Date;
  updated_at: Date;
}
