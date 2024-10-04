export enum DeviceType {
  WEB = "WEB",
  IOS = "IOS",
  ANDROID = "ANDROID",
}

export interface Device {
  uuid: string;
  user_uuid: string;
  device_type: DeviceType;
  device_token: string;
  platform_version?: string;
  app_version?: string;
  last_active_date?: Date;
  locale?: string;
  model?: string;
  created_at: Date;
  updated_at: Date;
}
