// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type MetricFilter, MetricFilterSerializer } from "./metricFilter.js";
import {
  type MetricSegmentationMatrix,
  MetricSegmentationMatrixSerializer,
} from "./metricSegmentationMatrix.js";
import { type UnitConversion, UnitConversionSerializer } from "./unitConversion.js";

export interface UpdateMetricRequest {
  description?: string | null | undefined;
  /** Absent = leave filters untouched; present (even empty) = replace them. */
  filters?: MetricFilter[] | null | undefined;
  name?: string | null | undefined;
  segmentationMatrix?: MetricSegmentationMatrix | null | undefined;
  unitConversion?: UnitConversion | null | undefined;
}

/** Converts `UpdateMetricRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const UpdateMetricRequestSerializer = {
  parse(json: any, path = "$"): UpdateMetricRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "description",
        "filters",
        "name",
        "segmentation_matrix",
        "unit_conversion",
      ]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      filters:
        json["filters"] != null
          ? decodeList(
              json["filters"],
              path,
              "filters",
              (item: any, p: string, i: number) =>
                MetricFilterSerializer.parse(item, decodePath(p, i))
            )
          : json["filters"],
      name:
        json["name"] != null ? decodeString(json["name"], path, "name") : json["name"],
      segmentationMatrix:
        json["segmentation_matrix"] != null
          ? MetricSegmentationMatrixSerializer.parse(
              json["segmentation_matrix"],
              decodePath(path, "segmentation_matrix")
            )
          : json["segmentation_matrix"],
      unitConversion:
        json["unit_conversion"] != null
          ? UnitConversionSerializer.parse(
              json["unit_conversion"],
              decodePath(path, "unit_conversion")
            )
          : json["unit_conversion"],
    };
  },

  serialize(value: UpdateMetricRequest): any {
    return {
      ...extraProperties(value, [
        "description",
        "filters",
        "name",
        "segmentationMatrix",
        "unitConversion",
      ]),
      description: value.description,
      filters:
        value.filters != null
          ? value.filters.map((item: any) => MetricFilterSerializer.serialize(item))
          : value.filters,
      name: value.name,
      segmentation_matrix:
        value.segmentationMatrix != null
          ? MetricSegmentationMatrixSerializer.serialize(value.segmentationMatrix)
          : value.segmentationMatrix,
      unit_conversion:
        value.unitConversion != null
          ? UnitConversionSerializer.serialize(value.unitConversion)
          : value.unitConversion,
    };
  },
};
