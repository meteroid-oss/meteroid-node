// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject } from "../decode.js";

export interface BillingConfig {
  billingCycles?: number | null | undefined;
  netTerms?: number | undefined;
  periodStartDay?: number | null | undefined;
}

/** Converts `BillingConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingConfigSerializer = {
  parse(json: any, path = "$"): BillingConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["billing_cycles", "net_terms", "period_start_day"]),
      billingCycles:
        json["billing_cycles"] != null
          ? decodeInteger(json["billing_cycles"], path, "billing_cycles")
          : json["billing_cycles"],
      netTerms:
        json["net_terms"] != null
          ? decodeInteger(json["net_terms"], path, "net_terms")
          : undefined,
      periodStartDay:
        json["period_start_day"] != null
          ? decodeInteger(json["period_start_day"], path, "period_start_day")
          : json["period_start_day"],
    };
  },

  serialize(value: BillingConfig): any {
    return {
      ...extraProperties(value, ["billingCycles", "netTerms", "periodStartDay"]),
      billing_cycles: value.billingCycles,
      net_terms: value.netTerms,
      period_start_day: value.periodStartDay,
    };
  },
};
