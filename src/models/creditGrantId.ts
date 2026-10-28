// this file is @generated
import { decodeString } from "../decode.js";

export type CreditGrantId = string;

/** Converts `CreditGrantId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantIdSerializer = {
  parse(json: any, path = "$"): CreditGrantId {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantId): any {
    return value;
  },
};
