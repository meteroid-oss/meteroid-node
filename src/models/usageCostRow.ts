// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type UsageCost, UsageCostSerializer } from "./usageCost.js";

export interface UsageCostRow {
  bucketStart: Date;
  cost?: UsageCost | null | undefined;
  /**
   * False when the price depends on the whole period's usage (tiered, volume, package,
   * capacity): the cost is then what the bucket adds to the period's price so far. A period's
   * rows still add up to its invoiced amount.
   */
  exact: boolean;
  /**
   * The value of `group_by` for the row. Absent when the request is not grouped, or the usage
   * has no value for the property.
   */
  group?: string | null | undefined;
  quantity: string;
}

/** Converts `UsageCostRow` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageCostRowSerializer = {
  parse(json: any, path = "$"): UsageCostRow {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["bucket_start", "cost", "exact", "group", "quantity"]),
      bucketStart: decodeDateTime(json["bucket_start"], path, "bucket_start"),
      cost:
        json["cost"] != null
          ? UsageCostSerializer.parse(json["cost"], decodePath(path, "cost"))
          : json["cost"],
      exact: decodeBoolean(json["exact"], path, "exact"),
      group:
        json["group"] != null
          ? decodeString(json["group"], path, "group")
          : json["group"],
      quantity: decodeString(json["quantity"], path, "quantity"),
    };
  },

  serialize(value: UsageCostRow): any {
    return {
      ...extraProperties(value, ["bucketStart", "cost", "exact", "group", "quantity"]),
      bucket_start: value.bucketStart,
      cost: value.cost != null ? UsageCostSerializer.serialize(value.cost) : value.cost,
      exact: value.exact,
      group: value.group,
      quantity: value.quantity,
    };
  },
};
