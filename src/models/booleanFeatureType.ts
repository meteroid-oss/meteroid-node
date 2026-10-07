// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";

export interface BooleanFeatureType {}

/** Converts `BooleanFeatureType` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanFeatureTypeSerializer = {
  parse(json: any, path = "$"): BooleanFeatureType {
    decodeObject(json, path);
    return {
      ...extraProperties(json, []),
    };
  },

  serialize(value: BooleanFeatureType): any {
    return {
      ...extraProperties(value, []),
    };
  },
};
