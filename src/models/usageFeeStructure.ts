// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";
import { type UsageModelEnum, UsageModelEnumSerializer } from "./usageModelEnum.js";

export interface UsageFeeStructure {
  metricId: BillableMetricId;
  model: UsageModelEnum;
  type: "USAGE";
}

/** Converts `UsageFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageFeeStructureSerializer = {
  parse(json: any, path = "$"): UsageFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id", "model", "type"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      model: UsageModelEnumSerializer.parse(json["model"], decodePath(path, "model")),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "USAGE")
          : "USAGE",
    };
  },

  serialize(value: UsageFeeStructure): any {
    return {
      ...extraProperties(value, ["metricId", "model", "type"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      model: UsageModelEnumSerializer.serialize(value.model),
      type: value.type ?? "USAGE",
    };
  },
};
