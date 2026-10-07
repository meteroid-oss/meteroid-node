// this file is @generated
import { decodeString } from "../decode.js";

export const ExtraRecurringBillingTypeEnum = {
  Advance: "ADVANCE",
  Arrears: "ARREARS",
} as const;
export type ExtraRecurringBillingTypeEnum =
  | (typeof ExtraRecurringBillingTypeEnum)[keyof typeof ExtraRecurringBillingTypeEnum]
  | (string & {});

/** Converts `ExtraRecurringBillingTypeEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringBillingTypeEnumSerializer = {
  parse(json: any, path = "$"): ExtraRecurringBillingTypeEnum {
    return decodeString(json, path);
  },

  serialize(value: ExtraRecurringBillingTypeEnum): any {
    return value;
  },
};
