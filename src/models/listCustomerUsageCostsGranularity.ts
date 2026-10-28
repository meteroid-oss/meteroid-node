// this file is @generated
import { decodeString } from "../decode.js";

export const ListCustomerUsageCostsGranularity = {
  Hour: "HOUR",
  Day: "DAY",
  Month: "MONTH",
} as const;
export type ListCustomerUsageCostsGranularity =
  | (typeof ListCustomerUsageCostsGranularity)[keyof typeof ListCustomerUsageCostsGranularity]
  | (string & {});

/** Converts `ListCustomerUsageCostsGranularity` values from (`parse`) and to (`serialize`) their JSON form. */
export const ListCustomerUsageCostsGranularitySerializer = {
  parse(json: any, path = "$"): ListCustomerUsageCostsGranularity {
    return decodeString(json, path);
  },

  serialize(value: ListCustomerUsageCostsGranularity): any {
    return value;
  },
};
