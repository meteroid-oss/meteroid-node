// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import {
  type PlanUsagePricingModel,
  PlanUsagePricingModelSerializer,
} from "./planUsagePricingModel.js";
/** Usage-based fee */
export interface UsagePlanFee {
  cadence: BillingPeriodEnum;
  metricId: BillableMetricId;
  pricing: PlanUsagePricingModel;
}

/** Converts `UsagePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsagePlanFeeSerializer = {
  parse(json: any, path = "$"): UsagePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["cadence", "metric_id", "pricing"]),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      pricing: PlanUsagePricingModelSerializer.parse(
        json["pricing"],
        decodePath(path, "pricing")
      ),
    };
  },

  serialize(value: UsagePlanFee): any {
    return {
      ...extraProperties(value, ["cadence", "metricId", "pricing"]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      pricing: PlanUsagePricingModelSerializer.serialize(value.pricing),
    };
  },
};
