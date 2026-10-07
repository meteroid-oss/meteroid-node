// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";
/** Resets each time your subscription renews — anchored to your billing cycle. */
export interface BillingCycleResetPeriod {}

/** Converts `BillingCycleResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingCycleResetPeriodSerializer = {
  parse(json: any, path = "$"): BillingCycleResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, []),
    };
  },

  serialize(value: BillingCycleResetPeriod): any {
    return {
      ...extraProperties(value, []),
    };
  },
};
