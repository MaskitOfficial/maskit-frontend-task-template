export enum ActionPerformer {
  SYSTEM = "SYSTEM",
  CREW = "CREW",
  OFFICER = "OFFICER",
  USER = "USER",
}
export type PerformerBy =
  | `${ActionPerformer.OFFICER}:${string}`
  | `${ActionPerformer.USER}:${string}`
  | `${ActionPerformer.CREW}:${string}`
  | ActionPerformer.SYSTEM;

export interface Routes {
  path: string;
  router: unknown;
}

export type BaseResponse<T = unknown> = {
  success: boolean;
  message: string;
  data?: T;
  error?: {
    code: string;
    details?: string;
  };
  // requestId?: string;
  timestamp: number;
};
export type StrictUpdateQuery<T> = {
  $set: T;
  $unset?: { [P in keyof T]?: "" | 1 | true };
};
