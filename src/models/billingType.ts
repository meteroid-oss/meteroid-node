// this file is @generated
import { decodeString } from "../decode.js";

export const BillingType = {
  Advance: "ADVANCE",
  Arrears: "ARREARS",
} as const;
export type BillingType = (typeof BillingType)[keyof typeof BillingType] | (string & {});

/** Converts `BillingType` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingTypeSerializer = {
  parse(json: any, path = "$"): BillingType {
    return decodeString(json, path);
  },

  serialize(value: BillingType): any {
    return value;
  },
};
