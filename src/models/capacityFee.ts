// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type FeeCreditUnit, FeeCreditUnitSerializer } from "./feeCreditUnit.js";

export interface CapacityFee {
  creditUnit?: FeeCreditUnit | null | undefined;
  included: number;
  metricId: BillableMetricId;
  overageRate: string;
  rate: string;
  type: "CAPACITY";
}

/** Converts `CapacityFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityFeeSerializer = {
  parse(json: any, path = "$"): CapacityFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "credit_unit",
        "included",
        "metric_id",
        "overage_rate",
        "rate",
        "type",
      ]),
      creditUnit:
        json["credit_unit"] != null
          ? FeeCreditUnitSerializer.parse(
              json["credit_unit"],
              decodePath(path, "credit_unit")
            )
          : json["credit_unit"],
      included: decodeInteger(json["included"], path, "included"),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      overageRate: decodeString(json["overage_rate"], path, "overage_rate"),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CAPACITY")
          : "CAPACITY",
    };
  },

  serialize(value: CapacityFee): any {
    return {
      ...extraProperties(value, [
        "creditUnit",
        "included",
        "metricId",
        "overageRate",
        "rate",
        "type",
      ]),
      credit_unit:
        value.creditUnit != null
          ? FeeCreditUnitSerializer.serialize(value.creditUnit)
          : value.creditUnit,
      included: value.included,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      overage_rate: value.overageRate,
      rate: value.rate,
      type: value.type ?? "CAPACITY",
    };
  },
};
