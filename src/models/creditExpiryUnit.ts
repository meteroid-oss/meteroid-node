// this file is @generated
import { decodeString } from "../decode.js";

export const CreditExpiryUnit = {
  Day: "DAY",
  Month: "MONTH",
  BillingPeriod: "BILLING_PERIOD",
} as const;
export type CreditExpiryUnit =
  | (typeof CreditExpiryUnit)[keyof typeof CreditExpiryUnit]
  | (string & {});

/** Converts `CreditExpiryUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditExpiryUnitSerializer = {
  parse(json: any, path = "$"): CreditExpiryUnit {
    return decodeString(json, path);
  },

  serialize(value: CreditExpiryUnit): any {
    return value;
  },
};
