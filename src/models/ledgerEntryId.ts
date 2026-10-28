// this file is @generated
import { decodeString } from "../decode.js";

export type LedgerEntryId = string;

/** Converts `LedgerEntryId` values from (`parse`) and to (`serialize`) their JSON form. */
export const LedgerEntryIdSerializer = {
  parse(json: any, path = "$"): LedgerEntryId {
    return decodeString(json, path);
  },

  serialize(value: LedgerEntryId): any {
    return value;
  },
};
