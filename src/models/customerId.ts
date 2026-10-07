// this file is @generated
import { decodeString } from "../decode.js";

export type CustomerId = string;

/** Converts `CustomerId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CustomerIdSerializer = {
  parse(json: any, path = "$"): CustomerId {
    return decodeString(json, path);
  },

  serialize(value: CustomerId): any {
    return value;
  },
};
