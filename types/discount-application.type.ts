import {
  DiscountDocument,
  DiscountDocumentPopulateOptions,
  PopulatedDiscountDocument,
} from "./discount-document.type";
import { DiscountEligibility } from "./discount-eligibility.type";
import {
  DiscountPolicy,
  DiscountPolicyPopulateOptions,
  PopulatedDiscountPolicy,
} from "./discount-policy.type";
import { PopulatedTicket, Ticket, TicketPopulateOptions } from "./ticket.type";

export type ValidStateActionCombination =
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.CREATE;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.ASSIGN_TICKET;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.REQUEST_DOCUMENT;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.UPLOAD_DOCUMENT;
    }
  | {
      state: DiscountApplicationState.IN_REVIEW;
      action: DiscountApplicationAction.REVIEW;
    }
  | {
      state: DiscountApplicationState.IN_REVIEW;
      action: DiscountApplicationAction.APPROVE;
    }
  | {
      state: DiscountApplicationState.IN_REVIEW;
      action: DiscountApplicationAction.REJECT;
    }
  | {
      state: DiscountApplicationState.IN_REVIEW;
      action: DiscountApplicationAction.REQUEST_INFO;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.TRANSFER;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.ASSIGN_TICKET;
    }
  | {
      state: DiscountApplicationState.APPROVED;
      action: DiscountApplicationAction.VERIFY;
    }
  | {
      state: DiscountApplicationState.PENDING;
      action: DiscountApplicationAction.RESET;
    };

export enum DiscountApplicationState {
  PENDING = "PENDING",
  IN_REVIEW = "IN_REVIEW",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
  VERIFIED = "VERIFIED",
}

export enum DiscountApplicationAction {
  CREATE = "CREATE",
  REQUEST_DOCUMENT = "REQUEST_DOCUMENT",
  UPLOAD_DOCUMENT = "UPLOAD_DOCUMENT",
  REVIEW = "REVIEW",
  REQUEST_INFO = "REQUEST_INFO",
  APPROVE = "APPROVE",
  REJECT = "REJECT",
  ASSIGN_TICKET = "ASSIGN_TICKET",
  VERIFY = "VERIFY",
  TRANSFER = "TRANSFER",
  RESET = "RESET",
}

export interface DiscountApplication {
  _id: string;
  uuid: string;
  box_office_uuid: string;
  bundle_uuid: string;
  applied_ticket_uuid?: string;
  verified_ticket_uuid?: string;
  discount_policy_uuid: string;
  discount_document_uuid?: string;
  discount_eligibility_uuid?: string;
  state: DiscountApplicationState;
  last_action?: DiscountApplicationAction;
  requested_discount_amount: number;
  applied_discount_amount: number;
  created_at: Date;
  updated_at: Date;
  metadata?: Record<string, unknown>;
}

export interface DiscountApplicationPopulateOptions {
  discount_policy?: boolean | DiscountPolicyPopulateOptions;
  discount_document?: boolean | DiscountDocumentPopulateOptions;
  discount_eligibility?: boolean;
  applied_ticket?: boolean | TicketPopulateOptions;
}

export type PopulatedDiscountApplication<
  O extends DiscountApplicationPopulateOptions = Record<string, never>
> = DiscountApplication & {
  discount_policy: O["discount_policy"] extends true
    ? DiscountPolicy
    : O["discount_policy"] extends DiscountPolicyPopulateOptions
    ? PopulatedDiscountPolicy<O["discount_policy"]>
    : undefined;
  discount_document: O["discount_document"] extends true
    ? DiscountDocument
    : O["discount_document"] extends DiscountDocumentPopulateOptions
    ? PopulatedDiscountDocument<O["discount_document"]>
    : undefined;
  discount_eligibility: O["discount_eligibility"] extends true
    ? DiscountEligibility
    : undefined;
  applied_ticket: O["applied_ticket"] extends true
    ? Ticket
    : O["applied_ticket"] extends TicketPopulateOptions
    ? PopulatedTicket<O["applied_ticket"]>
    : undefined;
};
