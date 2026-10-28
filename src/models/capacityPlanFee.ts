// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import {
  type CapacityThreshold,
  CapacityThresholdSerializer,
} from "./capacityThreshold.js";
import {
  type PlanFeeCreditUnit,
  PlanFeeCreditUnitSerializer,
} from "./planFeeCreditUnit.js";
/** Capacity-based fee with included committed usage and overage */
export interface CapacityPlanFee {
  cadence: BillingPeriodEnum;
  creditUnit?: PlanFeeCreditUnit | null | undefined;
  metricId: BillableMetricId;
  thresholds: CapacityThreshold[];
  type: "CAPACITY";
}

/** Converts `CapacityPlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityPlanFeeSerializer = {
  parse(json: any, path = "$"): CapacityPlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cadence",
        "credit_unit",
        "metric_id",
        "thresholds",
        "type",
      ]),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      creditUnit:
        json["credit_unit"] != null
          ? PlanFeeCreditUnitSerializer.parse(
              json["credit_unit"],
              decodePath(path, "credit_unit")
            )
          : json["credit_unit"],
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
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CAPACITY")
          : "CAPACITY",
    };
  },

  serialize(value: CapacityPlanFee): any {
    return {
      ...extraProperties(value, [
        "cadence",
        "creditUnit",
        "metricId",
        "thresholds",
        "type",
      ]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      credit_unit:
        value.creditUnit != null
          ? PlanFeeCreditUnitSerializer.serialize(value.creditUnit)
          : value.creditUnit,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      thresholds: value.thresholds.map((item: any) =>
        CapacityThresholdSerializer.serialize(item)
      ),
      type: value.type ?? "CAPACITY",
    };
  },
};
