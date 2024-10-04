export enum OfficerState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum OfficerLoginType {
  EMAIL = "EMAIL",
}

export enum OfficerRole {
  SYSTEM_ADMIN = "SYSTEM_ADMIN",
  CHIEF_ADMIN = "CHIEF_ADMIN",
  TICKET_MANAGER = "TICKET_MANAGER",
  DISCOUNT_MANAGER = "DISCOUNT_MANAGER",
  ACCOUNT_MANAGER = "ACCOUNT_MANAGER",
}

export interface AreaInfo {
  type: "GATE" | "SECTION" | "FLOOR" | "ZONE" | "OTHER";
  name: string;
  description?: string;
}

export interface Officer {
  uuid: string;
  box_office_uuid: string;
  role: OfficerRole;
  name: string;
  phone_number: string;
  login_type: OfficerLoginType;
  social_id?: string;
  email: string;
  password_hash: string;
  state: OfficerState;
  assigned_areas: AreaInfo[];
  created_at: Date;
  updated_at: Date;
}
