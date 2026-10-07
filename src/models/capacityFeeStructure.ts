// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";

export interface CapacityFeeStructure {
  metricId: BillableMetricId;
}

/** Converts `CapacityFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityFeeStructureSerializer = {
  parse(json: any, path = "$"): CapacityFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
    };
  },

  serialize(value: CapacityFeeStructure): any {
    return {
      ...extraProperties(value, ["metricId"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
    };
  },
};
