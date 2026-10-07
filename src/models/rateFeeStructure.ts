// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";

export interface RateFeeStructure {}

/** Converts `RateFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const RateFeeStructureSerializer = {
  parse(json: any, path = "$"): RateFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, []),
    };
  },

  serialize(value: RateFeeStructure): any {
    return {
      ...extraProperties(value, []),
    };
  },
};
