// this file is @generated
import { decodeString } from "../decode.js";

export const InvoicePaymentStatus = {
  Unpaid: "UNPAID",
  PartiallyPaid: "PARTIALLY_PAID",
  Paid: "PAID",
  Errored: "ERRORED",
  Processing: "PROCESSING",
} as const;
export type InvoicePaymentStatus =
  | (typeof InvoicePaymentStatus)[keyof typeof InvoicePaymentStatus]
  | (string & {});

/** Converts `InvoicePaymentStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoicePaymentStatusSerializer = {
  parse(json: any, path = "$"): InvoicePaymentStatus {
    return decodeString(json, path);
  },

  serialize(value: InvoicePaymentStatus): any {
    return value;
  },
};
