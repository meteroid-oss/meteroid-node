// this file is @generated
import { decodeString } from "../decode.js";
/** What a cost is counted in. */
export const UsageCostUnit = {
  Currency: "CURRENCY",
  CreditUnit: "CREDIT_UNIT",
} as const;
export type UsageCostUnit =
  | (typeof UsageCostUnit)[keyof typeof UsageCostUnit]
  | (string & {});

/** Converts `UsageCostUnit` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageCostUnitSerializer = {
  parse(json: any, path = "$"): UsageCostUnit {
    return decodeString(json, path);
  },

  serialize(value: UsageCostUnit): any {
    return value;
  },
};
