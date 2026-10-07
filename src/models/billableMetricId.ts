// this file is @generated
import { decodeString } from "../decode.js";

export type BillableMetricId = string;

/** Converts `BillableMetricId` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillableMetricIdSerializer = {
  parse(json: any, path = "$"): BillableMetricId {
    return decodeString(json, path);
  },

  serialize(value: BillableMetricId): any {
    return value;
  },
};
