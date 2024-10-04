import {
  DiscountApplication,
  DiscountApplicationPopulateOptions,
  PopulatedDiscountApplication,
} from "./discount-application.type";
import { VerificationStatus } from "./discount-document.type";
import { Event, EventPopulateOptions, PopulatedEvent } from "./event.type";
import { PopulatedTicket, Ticket, TicketPopulateOptions } from "./ticket.type";

export enum BundleType {
  SINGLE = "SINGLE",
  DISCOUNT_GROUP = "DISCOUNT_GROUP",
  COMPANION_GROUP = "COMPANION_GROUP",
  COMPANION_AND_DISCOUNT_GROUP = "COMPANION_AND_DISCOUNT_GROUP",
  SINGLE_VERIFICATION_MULTI_ENTRY = "SINGLE_VERIFICATION_MULTI_ENTRY",
  GROUP_VERIFICATION_SHARED = "GROUP_VERIFICATION_SHARED",
}

export interface TicketBundle {
  _id: string;
  uuid: string;
  box_office_uuid: string;
  event_uuid: string;
  ticket_uuids: string[];
  bundle_type: BundleType;
  discount_application_uuids: string[];
  verification_status?: VerificationStatus;
  verified_by?: string;
  created_at: Date;
  updated_at: Date;
}

export interface BundlePopulateOptions {
  event?: boolean | EventPopulateOptions;
  tickets?: boolean | TicketPopulateOptions;
  discount_applications?: boolean | DiscountApplicationPopulateOptions;
}

export type PopulatedBundle<
  O extends BundlePopulateOptions = Record<string, never>
> = TicketBundle & {
  event: O["event"] extends true
    ? Event
    : O["event"] extends EventPopulateOptions
    ? PopulatedEvent<O["event"]>
    : undefined;
  tickets: O["tickets"] extends true
    ? Ticket[]
    : O["tickets"] extends TicketPopulateOptions
    ? PopulatedTicket<O["tickets"]>[]
    : undefined;
  discount_applications: O["discount_applications"] extends true
    ? DiscountApplication[]
    : O["discount_applications"] extends DiscountApplicationPopulateOptions
    ? PopulatedDiscountApplication<O["discount_applications"]>[]
    : undefined;
};
