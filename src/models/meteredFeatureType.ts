// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";

export interface MeteredFeatureType {
  metricId: BillableMetricId;
  type: "METERED";
}

/** Converts `MeteredFeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredFeatureTypeSerializer = {
  parse(json: any, path = "$"): MeteredFeatureType {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id", "type"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "METERED")
          : "METERED",
    };
  },

  serialize(value: MeteredFeatureType): any {
    return {
      ...extraProperties(value, ["metricId", "type"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
      type: value.type ?? "METERED",
    };
  },
};
