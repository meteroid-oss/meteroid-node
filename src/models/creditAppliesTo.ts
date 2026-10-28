// this file is @generated
import { decodeString } from "../decode.js";
/** Which charges credit pays: ALL pays any part of an invoice, USAGE only its usage charges. */
export const CreditAppliesTo = {
  All: "ALL",
  Usage: "USAGE",
} as const;
export type CreditAppliesTo =
  | (typeof CreditAppliesTo)[keyof typeof CreditAppliesTo]
  | (string & {});

/** Converts `CreditAppliesTo` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditAppliesToSerializer = {
  parse(json: any, path = "$"): CreditAppliesTo {
    return decodeString(json, path);
  },

  serialize(value: CreditAppliesTo): any {
    return value;
  },
};
