// this file is @generated
import { decodeString } from "../decode.js";

export type QuoteId = string;

/** Converts `QuoteId` values from (`parse`) and to (`serialize`) their JSON form. */
export const QuoteIdSerializer = {
  parse(json: any, path = "$"): QuoteId {
    return decodeString(json, path);
  },

  serialize(value: QuoteId): any {
    return value;
  },
};
