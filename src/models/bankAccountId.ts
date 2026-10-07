// this file is @generated
import { decodeString } from "../decode.js";

export type BankAccountId = string;

/** Converts `BankAccountId` values from (`parse`) and to (`serialize`) their JSON form. */
export const BankAccountIdSerializer = {
  parse(json: any, path = "$"): BankAccountId {
    return decodeString(json, path);
  },

  serialize(value: BankAccountId): any {
    return value;
  },
};
