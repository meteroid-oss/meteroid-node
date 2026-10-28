// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type MetricDimension, MetricDimensionSerializer } from "./metricDimension.js";

export interface DoubleSegmentationMatrix {
  dimension1: MetricDimension;
  dimension2: MetricDimension;
  type: "DOUBLE";
}

/** Converts `DoubleSegmentationMatrix` values from (`parse`) and to (`serialize`) their JSON form. */
export const DoubleSegmentationMatrixSerializer = {
  parse(json: any, path = "$"): DoubleSegmentationMatrix {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["dimension1", "dimension2", "type"]),
      dimension1: MetricDimensionSerializer.parse(
        json["dimension1"],
        decodePath(path, "dimension1")
      ),
      dimension2: MetricDimensionSerializer.parse(
        json["dimension2"],
        decodePath(path, "dimension2")
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "DOUBLE")
          : "DOUBLE",
    };
  },

  serialize(value: DoubleSegmentationMatrix): any {
    return {
      ...extraProperties(value, ["dimension1", "dimension2", "type"]),
      dimension1: MetricDimensionSerializer.serialize(value.dimension1),
      dimension2: MetricDimensionSerializer.serialize(value.dimension2),
      type: value.type ?? "DOUBLE",
    };
  },
};
