// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface RateFeeStructure {
  type: "RATE";
}

/** Converts `RateFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const RateFeeStructureSerializer = {
  parse(json: any, path = "$"): RateFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "RATE")
          : "RATE",
    };
  },

  serialize(value: RateFeeStructure): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "RATE",
    };
  },
};
