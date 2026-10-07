// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";

export interface CapacityFee {
  included: number;
  metricId: BillableMetricId;
  overageRate: string;
  rate: string;
}

/** Converts `CapacityFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityFeeSerializer = {
  parse(json: any, path = "$"): CapacityFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["included", "metric_id", "overage_rate", "rate"]),
      included: decodeInteger(json["included"], path, "included"),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      overageRate: decodeString(json["overage_rate"], path, "overage_rate"),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: CapacityFee): any {
    return {
      ...extraProperties(value, ["included", "metricId", "overageRate", "rate"]),
      included: value.included,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      overage_rate: value.overageRate,
      rate: value.rate,
    };
  },
};
