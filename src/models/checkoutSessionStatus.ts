// this file is @generated
import { decodeString } from "../decode.js";

export const CheckoutSessionStatus = {
  Created: "CREATED",
  AwaitingPayment: "AWAITING_PAYMENT",
  Completed: "COMPLETED",
  Expired: "EXPIRED",
  Cancelled: "CANCELLED",
} as const;
export type CheckoutSessionStatus =
  | (typeof CheckoutSessionStatus)[keyof typeof CheckoutSessionStatus]
  | (string & {});

/** Converts `CheckoutSessionStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const CheckoutSessionStatusSerializer = {
  parse(json: any, path = "$"): CheckoutSessionStatus {
    return decodeString(json, path);
  },

  serialize(value: CheckoutSessionStatus): any {
    return value;
  },
};
