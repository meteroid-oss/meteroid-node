// this file is @generated
import { decodeString } from "../decode.js";

export const CreditGrantSource = {
  Manual: "MANUAL",
  Purchase: "PURCHASE",
  Plan: "PLAN",
  CreditNote: "CREDIT_NOTE",
  Adjustment: "ADJUSTMENT",
  Migrated: "MIGRATED",
  Rollover: "ROLLOVER",
  Coupon: "COUPON",
  Overpayment: "OVERPAYMENT",
} as const;
export type CreditGrantSource =
  | (typeof CreditGrantSource)[keyof typeof CreditGrantSource]
  | (string & {});

/** Converts `CreditGrantSource` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantSourceSerializer = {
  parse(json: any, path = "$"): CreditGrantSource {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantSource): any {
    return value;
  },
};
