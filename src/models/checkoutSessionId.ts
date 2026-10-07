// this file is @generated
import { decodeString } from "../decode.js";

export type CheckoutSessionId = string;

/** Converts `CheckoutSessionId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CheckoutSessionIdSerializer = {
  parse(json: any, path = "$"): CheckoutSessionId {
    return decodeString(json, path);
  },

  serialize(value: CheckoutSessionId): any {
    return value;
  },
};
