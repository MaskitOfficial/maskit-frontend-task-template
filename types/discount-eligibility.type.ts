export interface DiscountEligibility {
  uuid: string;
  user_uuid: string;
  discount_type_uuid: string;
  discount_policy_uuid: string;
  status: DiscountEligibilityStatus;
  verified_at: Date;
  expires_at?: Date; // null이면 만료 없음
  verification_document_uuid?: string;
  created_at: Date;
  updated_at: Date;
}

export enum DiscountEligibilityStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  EXPIRED = "EXPIRED",
  REQUIRES_ADDITIONAL_INFO = "REQUIRES_ADDITIONAL_INFO",
}
