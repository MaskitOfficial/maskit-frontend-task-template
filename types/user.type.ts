export enum UserState {
  INFO_INCOMPLETE = "INFO_INCOMPLETE",
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum UserLoginType {
  EMAIL = "EMAIL",
  GOOGLE = "GOOGLE",
  APPLE = "APPLE",
  KAKAO = "KAKAO",
  NAVER = "NAVER",
}

export enum UserGender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}

export interface User {
  uuid: string;
  phone_number: string;
  state: UserState;
  login_type?: UserLoginType;
  email?: string;
  password_hash?: string;
  name?: string;
  nickname?: string;
  birth_date?: string;
  gender?: UserGender;
  verification_code?: string;
  verification_code_expires_at?: Date;
  created_at: Date;
  updated_at: Date;
}
