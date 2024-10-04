import {
  DiscountApplication,
  DiscountApplicationPopulateOptions,
  PopulatedDiscountApplication,
} from "./discount-application.type";
import { Event, EventPopulateOptions, PopulatedEvent } from "./event.type";
import {
  BundlePopulateOptions,
  PopulatedBundle,
  TicketBundle,
} from "./ticket-bundle.type";
import { User } from "./user.type";

export enum TicketLifecycleState {
  AVAILABLE = "AVAILABLE",
  ISSUED = "ISSUED",
  TRANSFERRED = "TRANSFERRED",
  CHECKED_IN = "CHECKED_IN",
  CANCELED = "CANCELED",
}

export enum TicketProcessingStatus {
  REQUESTED = "REQUESTED",
  PENDING = "PENDING",
  APPLIED = "APPLIED",
}

export enum TicketAction {
  REGISTRATION = "REGISTRATION",

  DISCOUNT_DOCUMENT_UPLOADED = "DISCOUNT_DOCUMENT_UPLOADED",
  DISCOUNT_DOCUMENT_STATUS_CHANGED = "DISCOUNT_DOCUMENT_STATUS_CHANGED",
  DISCOUNT_APPLIED = "DISCOUNT_APPLIED",
  DISCOUNT_REQUIRES_ADDITIONAL_INFO = "DISCOUNT_REQUIRES_ADDITIONAL_INFO",

  TRANSFER = "TRANSFER",
  RECLAIM = "RECLAIM",
  RETURN = "RETURN",

  ISSUANCE = "ISSUANCE",
  ISSUANCE_CANCELED = "ISSUANCE_CANCELED",
  CHECK_IN = "CHECK_IN",
  CHECK_IN_FAILED = "CHECK_IN_FAILED",

  CANCELLATION = "CANCELLATION",

  MODIFICATION = "MODIFICATION",
}

export enum CurrencyType {
  KRW = "KRW",
  USD = "USD",
  EUR = "EUR",
  JPY = "JPY",
}

export interface ParkingDiscount {
  code: string;
}

export interface TicketMetadata {
  seat_grade?: string;
  parking_discount?: ParkingDiscount;
  [key: string]: unknown;
}

export interface Ticket {
  _id: string;
  uuid: string;
  bundle_uuid: string;
  box_office_uuid: string;
  event_uuid: string;
  ticket_holder_uuid?: string;
  original_owner_uuid?: string;
  reservation_number?: string;
  seat_number?: string;
  price?: number;
  currency?: CurrencyType;
  state: TicketLifecycleState;
  status: TicketProcessingStatus;
  applied_discount_application_uuid?: string;
  created_at: Date;
  updated_at: Date;
  metadata?: TicketMetadata;
}

export interface TicketPopulateOptions {
  event?: boolean | EventPopulateOptions;
  original_owner?: boolean;
  ticket_holder?: boolean;
  bundle?: boolean | BundlePopulateOptions;
  applied_discount_application?: boolean | DiscountApplicationPopulateOptions;
}

export type PopulatedTicket<
  O extends TicketPopulateOptions = Record<string, never>
> = Ticket & {
  event: O["event"] extends true
    ? Event
    : O["event"] extends EventPopulateOptions
    ? PopulatedEvent<O["event"]>
    : undefined;
  original_owner: O["original_owner"] extends true ? Partial<User> : undefined;
  ticket_holder: O["ticket_holder"] extends true ? Partial<User> : undefined;
  bundle: O["bundle"] extends true
    ? TicketBundle
    : O["bundle"] extends BundlePopulateOptions
    ? PopulatedBundle<O["bundle"]>
    : undefined;
  applied_discount_application: O["applied_discount_application"] extends true
    ? DiscountApplication | undefined
    : O["applied_discount_application"] extends DiscountApplicationPopulateOptions
    ?
        | PopulatedDiscountApplication<O["applied_discount_application"]>
        | undefined
    : undefined;
};
