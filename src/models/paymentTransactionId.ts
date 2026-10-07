// this file is @generated
import { decodeString } from "../decode.js";

export type PaymentTransactionId = string;

/** Converts `PaymentTransactionId` values from (`parse`) and to (`serialize`) their JSON form. */
export const PaymentTransactionIdSerializer = {
  parse(json: any, path = "$"): PaymentTransactionId {
    return decodeString(json, path);
  },

  serialize(value: PaymentTransactionId): any {
    return value;
  },
};
