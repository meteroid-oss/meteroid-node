// this file is @generated
import { decodeString } from "../decode.js";

export type PriceId = string;

/** Converts `PriceId` values from (`parse`) and to (`serialize`) their JSON form. */
export const PriceIdSerializer = {
  parse(json: any, path = "$"): PriceId {
    return decodeString(json, path);
  },

  serialize(value: PriceId): any {
    return value;
  },
};
