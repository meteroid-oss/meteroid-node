// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodeString } from "../decode.js";

export interface MetricDimension {
  key: string;
  values: string[];
}

/** Converts `MetricDimension` values from (`parse`) and to (`serialize`) their JSON form. */
export const MetricDimensionSerializer = {
  parse(json: any, path = "$"): MetricDimension {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["key", "values"]),
      key: decodeString(json["key"], path, "key"),
      values: decodeList(
        json["values"],
        path,
        "values",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
    };
  },

  serialize(value: MetricDimension): any {
    return {
      ...extraProperties(value, ["key", "values"]),
      key: value.key,
      values: value.values,
    };
  },
};
