// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Resets each time your subscription renews — anchored to your billing cycle. */
export interface BillingCycleResetPeriod {
  type: "BILLING_CYCLE";
}

/** Converts `BillingCycleResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingCycleResetPeriodSerializer = {
  parse(json: any, path = "$"): BillingCycleResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "BILLING_CYCLE")
          : "BILLING_CYCLE",
    };
  },

  serialize(value: BillingCycleResetPeriod): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "BILLING_CYCLE",
    };
  },
};
