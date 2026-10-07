// this file is @generated
import { decodeString } from "../decode.js";

export type FeatureId = string;

/** Converts `FeatureId` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeatureIdSerializer = {
  parse(json: any, path = "$"): FeatureId {
    return decodeString(json, path);
  },

  serialize(value: FeatureId): any {
    return value;
  },
};
