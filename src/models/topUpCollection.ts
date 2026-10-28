// this file is @generated
import { decodeString } from "../decode.js";
/**
 * How a top-up is paid: CHARGE a saved payment method now, or SEND_INVOICE and grant the credit
 * once the invoice is paid.
 */
export const TopUpCollection = {
  Charge: "CHARGE",
  SendInvoice: "SEND_INVOICE",
} as const;
export type TopUpCollection =
  | (typeof TopUpCollection)[keyof typeof TopUpCollection]
  | (string & {});

/** Converts `TopUpCollection` values from (`parse`) and to (`serialize`) their JSON form. */
export const TopUpCollectionSerializer = {
  parse(json: any, path = "$"): TopUpCollection {
    return decodeString(json, path);
  },

  serialize(value: TopUpCollection): any {
    return value;
  },
};
