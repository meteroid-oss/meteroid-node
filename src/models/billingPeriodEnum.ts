// this file is @generated
import { decodeString } from "../decode.js";

export const BillingPeriodEnum = {
  Monthly: "MONTHLY",
  Quarterly: "QUARTERLY",
  Semiannual: "SEMIANNUAL",
  Annual: "ANNUAL",
} as const;
export type BillingPeriodEnum =
  | (typeof BillingPeriodEnum)[keyof typeof BillingPeriodEnum]
  | (string & {});

/** Converts `BillingPeriodEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingPeriodEnumSerializer = {
  parse(json: any, path = "$"): BillingPeriodEnum {
    return decodeString(json, path);
  },

  serialize(value: BillingPeriodEnum): any {
    return value;
  },
};
