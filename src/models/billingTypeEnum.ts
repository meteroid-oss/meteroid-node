// this file is @generated
import { decodeString } from "../decode.js";

export const BillingTypeEnum = {
  Advance: "ADVANCE",
  Arrears: "ARREARS",
} as const;
export type BillingTypeEnum =
  | (typeof BillingTypeEnum)[keyof typeof BillingTypeEnum]
  | (string & {});

/** Converts `BillingTypeEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingTypeEnumSerializer = {
  parse(json: any, path = "$"): BillingTypeEnum {
    return decodeString(json, path);
  },

  serialize(value: BillingTypeEnum): any {
    return value;
  },
};
