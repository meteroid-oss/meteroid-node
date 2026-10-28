// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface BooleanFeatureType {
  type: "BOOLEAN";
}

/** Converts `BooleanFeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanFeatureTypeSerializer = {
  parse(json: any, path = "$"): BooleanFeatureType {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "BOOLEAN")
          : "BOOLEAN",
    };
  },

  serialize(value: BooleanFeatureType): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "BOOLEAN",
    };
  },
};
