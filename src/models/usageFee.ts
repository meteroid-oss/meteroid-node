// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import {
  type UsagePricingModel,
  UsagePricingModelSerializer,
} from "./usagePricingModel.js";

export interface UsageFee {
  metricId: BillableMetricId;
  model: UsagePricingModel;
}

/** Converts `UsageFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageFeeSerializer = {
  parse(json: any, path = "$"): UsageFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id", "model"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      model: UsagePricingModelSerializer.parse(json["model"], decodePath(path, "model")),
    };
  },

  serialize(value: UsageFee): any {
    return {
      ...extraProperties(value, ["metricId", "model"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      model: UsagePricingModelSerializer.serialize(value.model),
    };
  },
};
