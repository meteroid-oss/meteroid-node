// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import {
  type CapacityThreshold,
  CapacityThresholdSerializer,
} from "./capacityThreshold.js";
/** Capacity-based fee with included committed usage and overage */
export interface CapacityPlanFee {
  cadence: BillingPeriodEnum;
  metricId: BillableMetricId;
  thresholds: CapacityThreshold[];
}

/** Converts `CapacityPlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityPlanFeeSerializer = {
  parse(json: any, path = "$"): CapacityPlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["cadence", "metric_id", "thresholds"]),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      thresholds: decodeList(
        json["thresholds"],
        path,
        "thresholds",
        (item: any, p: string, i: number) =>
          CapacityThresholdSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: CapacityPlanFee): any {
    return {
      ...extraProperties(value, ["cadence", "metricId", "thresholds"]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      thresholds: value.thresholds.map((item: any) =>
        CapacityThresholdSerializer.serialize(item)
      ),
    };
  },
};
