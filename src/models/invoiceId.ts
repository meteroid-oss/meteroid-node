// this file is @generated
import { decodeString } from "../decode.js";

export type InvoiceId = string;

/** Converts `InvoiceId` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoiceIdSerializer = {
  parse(json: any, path = "$"): InvoiceId {
    return decodeString(json, path);
  },

  serialize(value: InvoiceId): any {
    return value;
  },
};
