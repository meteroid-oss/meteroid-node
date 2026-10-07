// this file is @generated
import { decodeString } from "../decode.js";

export type InvoicingEntityId = string;

/** Converts `InvoicingEntityId` values from (`parse`) and to (`serialize`) their JSON form. */
export const InvoicingEntityIdSerializer = {
  parse(json: any, path = "$"): InvoicingEntityId {
    return decodeString(json, path);
  },

  serialize(value: InvoicingEntityId): any {
    return value;
  },
};
