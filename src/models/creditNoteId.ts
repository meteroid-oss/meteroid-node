// this file is @generated
import { decodeString } from "../decode.js";

export type CreditNoteId = string;

/** Converts `CreditNoteId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditNoteIdSerializer = {
  parse(json: any, path = "$"): CreditNoteId {
    return decodeString(json, path);
  },

  serialize(value: CreditNoteId): any {
    return value;
  },
};
