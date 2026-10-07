// this file is @generated
import { decodeString } from "../decode.js";

export type PriceComponentId = string;

/** Converts `PriceComponentId` values from (`parse`) and to (`serialize`) their JSON form. */
export const PriceComponentIdSerializer = {
  parse(json: any, path = "$"): PriceComponentId {
    return decodeString(json, path);
  },

  serialize(value: PriceComponentId): any {
    return value;
  },
};
