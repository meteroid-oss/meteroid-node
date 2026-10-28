// this file is @generated
import { decodeString } from "../decode.js";

export const TopUpStatus = {
  Succeeded: "SUCCEEDED",
  Pending: "PENDING",
  RequiresCustomerAction: "REQUIRES_CUSTOMER_ACTION",
  AwaitingPayment: "AWAITING_PAYMENT",
} as const;
export type TopUpStatus = (typeof TopUpStatus)[keyof typeof TopUpStatus] | (string & {});

/** Converts `TopUpStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const TopUpStatusSerializer = {
  parse(json: any, path = "$"): TopUpStatus {
    return decodeString(json, path);
  },

  serialize(value: TopUpStatus): any {
    return value;
  },
};
