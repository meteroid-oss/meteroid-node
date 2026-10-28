// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import {
  type PlanFeeCreditUnit,
  PlanFeeCreditUnitSerializer,
} from "./planFeeCreditUnit.js";
import {
  type PlanUsagePricingModel,
  PlanUsagePricingModelSerializer,
} from "./planUsagePricingModel.js";
/** Usage-based fee */
export interface UsagePlanFee {
  cadence: BillingPeriodEnum;
  creditUnit?: PlanFeeCreditUnit | null | undefined;
  metricId: BillableMetricId;
  pricing: PlanUsagePricingModel;
  type: "USAGE";
}

/** Converts `UsagePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsagePlanFeeSerializer = {
  parse(json: any, path = "$"): UsagePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cadence",
        "credit_unit",
        "metric_id",
        "pricing",
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
      pricing: PlanUsagePricingModelSerializer.parse(
        json["pricing"],
        decodePath(path, "pricing")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "USAGE")
          : "USAGE",
    };
  },

  serialize(value: UsagePlanFee): any {
    return {
      ...extraProperties(value, ["cadence", "creditUnit", "metricId", "pricing", "type"]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      credit_unit:
        value.creditUnit != null
          ? PlanFeeCreditUnitSerializer.serialize(value.creditUnit)
          : value.creditUnit,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      pricing: PlanUsagePricingModelSerializer.serialize(value.pricing),
      type: value.type ?? "USAGE",
    };
  },
};
