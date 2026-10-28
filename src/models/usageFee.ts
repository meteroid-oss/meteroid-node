// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type FeeCreditUnit, FeeCreditUnitSerializer } from "./feeCreditUnit.js";
import {
  type UsagePricingModel,
  UsagePricingModelSerializer,
} from "./usagePricingModel.js";

export interface UsageFee {
  creditUnit?: FeeCreditUnit | null | undefined;
  metricId: BillableMetricId;
  model: UsagePricingModel;
  type: "USAGE";
}

/** Converts `UsageFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageFeeSerializer = {
  parse(json: any, path = "$"): UsageFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["credit_unit", "metric_id", "model", "type"]),
      creditUnit:
        json["credit_unit"] != null
          ? FeeCreditUnitSerializer.parse(
              json["credit_unit"],
              decodePath(path, "credit_unit")
            )
          : json["credit_unit"],
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      model: UsagePricingModelSerializer.parse(json["model"], decodePath(path, "model")),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "USAGE")
          : "USAGE",
    };
  },

  serialize(value: UsageFee): any {
    return {
      ...extraProperties(value, ["creditUnit", "metricId", "model", "type"]),
      credit_unit:
        value.creditUnit != null
          ? FeeCreditUnitSerializer.serialize(value.creditUnit)
          : value.creditUnit,
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      model: UsagePricingModelSerializer.serialize(value.model),
      type: value.type ?? "USAGE",
    };
  },
};
