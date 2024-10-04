import { DiscountType } from "./discount-type.type";

export enum BundleVerificationType {
  VERIFIED = "VERIFIED",
  STANDARD = "STANDARD",
  SINGLE_VERIFICATION_MULTI_ENTRY = "SINGLE_VERIFICATION_MULTI_ENTRY",
  GROUP_VERIFICATION_SHARED = "GROUP_VERIFICATION_SHARED",
}

export enum ApplicationScope {
  GLOBAL = "GLOBAL",
  BOX_OFFICE = "BOX_OFFICE",
}

export enum Reusability {
  MULTIPLE_USE = "MULTIPLE_USE",
}

export enum EligibilityDuration {
  PERMANENT = "PERMANENT",
  FIXED_TERM = "FIXED_TERM",
}

export interface DiscountPolicy {
  uuid: string;
  box_office_uuid: string;
  discount_type_uuid: string;
  discount_type?: DiscountType;
  name: string;
  description: string;
  calculation_logic: string;
  valid_from: Date;
  valid_until?: Date;
  application_scope: ApplicationScope;
  reusability: Reusability;
  eligibility_duration: EligibilityDuration;
  requires_companion_info: boolean;
  max_companions?: number;
  bundle_verification_type: BundleVerificationType;
  created_at: Date;
  updated_at: Date;
}

export type DiscountPolicyPopulateOptions = {
  discount_type?: boolean;
};

type PopulatedFields<O extends DiscountPolicyPopulateOptions> = {
  discount_type: O["discount_type"] extends true ? DiscountType : undefined;
};

export type PopulatedDiscountPolicy<
  O extends DiscountPolicyPopulateOptions = Record<string, never>
> = DiscountPolicy & PopulatedFields<O>;
