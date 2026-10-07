// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type MetricFilterOperator,
  MetricFilterOperatorSerializer,
} from "./metricFilterOperator.js";
/**
 * A pre-aggregation filter: only events whose `property` matches feed the metric's
 * aggregation. Distinct from a segmentation dimension (which splits pricing). Multiple
 * filters are ANDed.
 */
export interface MetricFilter {
  op: MetricFilterOperator;
  property: string;
  values: string[];
}

/** Converts `MetricFilter` values from (`parse`) and to (`serialize`) their JSON form. */
export const MetricFilterSerializer = {
  parse(json: any, path = "$"): MetricFilter {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["op", "property", "values"]),
      op: MetricFilterOperatorSerializer.parse(json["op"], decodePath(path, "op")),
      property: decodeString(json["property"], path, "property"),
      values: decodeList(
        json["values"],
        path,
        "values",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
    };
  },

  serialize(value: MetricFilter): any {
    return {
      ...extraProperties(value, ["op", "property", "values"]),
      op: MetricFilterOperatorSerializer.serialize(value.op),
      property: value.property,
      values: value.values,
    };
  },
};
