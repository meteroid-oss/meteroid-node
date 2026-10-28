// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";

export interface CapacityFeeStructure {
  metricId: BillableMetricId;
  type: "CAPACITY";
}

/** Converts `CapacityFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityFeeStructureSerializer = {
  parse(json: any, path = "$"): CapacityFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id", "type"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CAPACITY")
          : "CAPACITY",
    };
  },

  serialize(value: CapacityFeeStructure): any {
    return {
      ...extraProperties(value, ["metricId", "type"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      type: value.type ?? "CAPACITY",
    };
  },
};
