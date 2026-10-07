// this file is @generated
import { decodeString } from "../decode.js";

export type CustomerPaymentMethodId = string;

/** Converts `CustomerPaymentMethodId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerPaymentMethodIdSerializer = {
  parse(json: any, path = "$"): CustomerPaymentMethodId {
    return decodeString(json, path);
  },

  serialize(value: CustomerPaymentMethodId): any {
    return value;
  },
};
