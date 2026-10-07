// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type UsageModelEnum, UsageModelEnumSerializer } from "./usageModelEnum.js";

export interface UsageFeeStructure {
  metricId: BillableMetricId;
  model: UsageModelEnum;
}

/** Converts `UsageFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageFeeStructureSerializer = {
  parse(json: any, path = "$"): UsageFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id", "model"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      model: UsageModelEnumSerializer.parse(json["model"], decodePath(path, "model")),
    };
  },

  serialize(value: UsageFeeStructure): any {
    return {
      ...extraProperties(value, ["metricId", "model"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      model: UsageModelEnumSerializer.serialize(value.model),
    };
  },
};
