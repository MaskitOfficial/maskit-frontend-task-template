import { BoxOffice } from "./box-office.type";
import { DiscountPolicy } from "./discount-policy.type";
import { Facility } from "./facility.type";

export interface TicketStats {
  totalTickets: number;
  issuedTickets: number;
  checkedInTickets: number;
  availableTickets: number;
  transferredTickets: number;
  canceledTickets: number;
}

export interface PurchaseInfo {
  is_ticketed: boolean;
  base_price: number;
  sale_start_date: Date;
  sale_end_date: Date;
  total_seats: number;
  available_seats: number;
}

export interface EventGuidanceDialog {
  header: string;
  body: string;
}

export interface Event {
  _id: string;
  uuid: string;
  box_office_uuid: string;
  box_office?: Partial<BoxOffice>;
  title: string;
  facility_uuid: string;
  facility?: Facility;
  poster_image_url?: string;
  subtitle?: string;
  duration_in_minutes?: number;
  description?: string;
  start_date: Date;
  end_date: Date;
  location?: string;
  kopis_info?: string;
  purchase_info?: PurchaseInfo;
  discount_policy_uuids?: string[];
  discount_policies?: Partial<DiscountPolicy>[];
  entrance_button_text: string;
  post_event_survey_url?: string;
  additional_info?: string;
  guidance_dialog: EventGuidanceDialog;
  public_key: string;
  private_key: string;
  created_at: Date;
  updated_at: Date;
}

export type EventDocumentWithoutPrivateKey = Omit<Event, "private_key"> & {
  toObject: () => Omit<Event, "private_key">;
};

export interface EventPopulateOptions {
  box_office?: boolean;
  facility?: boolean;
  discount_policies?: boolean;
}

type PopulatedFields<O extends EventPopulateOptions> = {
  box_office: O["box_office"] extends true ? BoxOffice : undefined;
  facility: O["facility"] extends true ? Facility : undefined;
  discount_policies: O["discount_policies"] extends true
    ? DiscountPolicy[]
    : undefined;
};

export type PopulatedEvent<
  O extends EventPopulateOptions = Record<string, never>
> = Event & PopulatedFields<O>;
