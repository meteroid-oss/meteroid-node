// this file is @generated
import { decodeString } from "../decode.js";

export const BillingMetricAggregateEnum = {
  Count: "COUNT",
  Latest: "LATEST",
  Max: "MAX",
  Min: "MIN",
  Mean: "MEAN",
  Sum: "SUM",
  CountDistinct: "COUNT_DISTINCT",
} as const;
export type BillingMetricAggregateEnum =
  | (typeof BillingMetricAggregateEnum)[keyof typeof BillingMetricAggregateEnum]
  | (string & {});

/** Converts `BillingMetricAggregateEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const BillingMetricAggregateEnumSerializer = {
  parse(json: any, path = "$"): BillingMetricAggregateEnum {
    return decodeString(json, path);
  },

  serialize(value: BillingMetricAggregateEnum): any {
    return value;
  },
};
