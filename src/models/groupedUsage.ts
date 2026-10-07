// this file is @generated
import { extraProperties } from "../json.js";
import { decodeMap, decodeObject, decodeString } from "../decode.js";

export interface GroupedUsage {
  dimensions: { [key: string]: string };
  value: string;
}

/** Converts `GroupedUsage` values from (`parse`) and to (`serialize`) their JSON form. */
export const GroupedUsageSerializer = {
  parse(json: any, path = "$"): GroupedUsage {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["dimensions", "value"]),
      dimensions: decodeMap(
        json["dimensions"],
        path,
        "dimensions",
        (entry: any, p: string, key: string) => decodeString(entry, p, key)
      ),
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: GroupedUsage): any {
    return {
      ...extraProperties(value, ["dimensions", "value"]),
      dimensions: value.dimensions,
      value: value.value,
    };
  },
};
