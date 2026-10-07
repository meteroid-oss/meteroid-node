// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeMap, decodeObject, decodeString } from "../decode.js";

export interface LinkedSegmentationMatrix {
  dimension1Key: string;
  dimension2Key: string;
  values: { [key: string]: string[] };
}

/** Converts `LinkedSegmentationMatrix` values from (`parse`) and to (`serialize`) their JSON form. */
export const LinkedSegmentationMatrixSerializer = {
  parse(json: any, path = "$"): LinkedSegmentationMatrix {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["dimension1_key", "dimension2_key", "values"]),
      dimension1Key: decodeString(json["dimension1_key"], path, "dimension1_key"),
      dimension2Key: decodeString(json["dimension2_key"], path, "dimension2_key"),
      values: decodeMap(
        json["values"],
        path,
        "values",
        (entry: any, p: string, key: string) =>
          decodeList(entry, p, key, (item: any, p: string, i: number) =>
            decodeString(item, p, i)
          )
      ),
    };
  },

  serialize(value: LinkedSegmentationMatrix): any {
    return {
      ...extraProperties(value, ["dimension1Key", "dimension2Key", "values"]),
      dimension1_key: value.dimension1Key,
      dimension2_key: value.dimension2Key,
      values: value.values,
    };
  },
};
