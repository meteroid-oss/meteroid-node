// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface OneTimeFeeStructure {
  type: "ONE_TIME";
}

/** Converts `OneTimeFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimeFeeStructureSerializer = {
  parse(json: any, path = "$"): OneTimeFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "ONE_TIME")
          : "ONE_TIME",
    };
  },

  serialize(value: OneTimeFeeStructure): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "ONE_TIME",
    };
  },
};
