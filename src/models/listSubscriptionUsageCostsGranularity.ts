// this file is @generated
import { decodeString } from "../decode.js";

export const ListSubscriptionUsageCostsGranularity = {
  Hour: "HOUR",
  Day: "DAY",
  Month: "MONTH",
} as const;
export type ListSubscriptionUsageCostsGranularity =
  | (typeof ListSubscriptionUsageCostsGranularity)[keyof typeof ListSubscriptionUsageCostsGranularity]
  | (string & {});

/** Converts `ListSubscriptionUsageCostsGranularity` values from (`parse`) and to (`serialize`) their JSON form. */
export const ListSubscriptionUsageCostsGranularitySerializer = {
  parse(json: any, path = "$"): ListSubscriptionUsageCostsGranularity {
    return decodeString(json, path);
  },

  serialize(value: ListSubscriptionUsageCostsGranularity): any {
    return value;
  },
};
