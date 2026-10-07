// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type BillableMetricId, BillableMetricIdSerializer } from "./billableMetricId.js";

export interface MeteredFeatureType {
  metricId: BillableMetricId;
}

/** Converts `MeteredFeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const MeteredFeatureTypeSerializer = {
  parse(json: any, path = "$"): MeteredFeatureType {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["metric_id"]),
      metricId: BillableMetricIdSerializer.parse(
        json["metric_id"],
        decodePath(path, "metric_id")
      ),
    };
  },

  serialize(value: MeteredFeatureType): any {
    return {
      ...extraProperties(value, ["metricId"]),
      metric_id: BillableMetricIdSerializer.serialize(value.metricId),
    };
  },
};
