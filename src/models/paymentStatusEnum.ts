// this file is @generated
import { decodeString } from "../decode.js";

export const PaymentStatusEnum = {
  Ready: "READY",
  Pending: "PENDING",
  Settled: "SETTLED",
  Cancelled: "CANCELLED",
  Failed: "FAILED",
  Refunded: "REFUNDED",
} as const;
export type PaymentStatusEnum =
  | (typeof PaymentStatusEnum)[keyof typeof PaymentStatusEnum]
  | (string & {});

/** Converts `PaymentStatusEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaymentStatusEnumSerializer = {
  parse(json: any, path = "$"): PaymentStatusEnum {
    return decodeString(json, path);
  },

  serialize(value: PaymentStatusEnum): any {
    return value;
  },
};
