// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type FeatureId, FeatureIdSerializer } from "./featureId.js";

export interface EntitlementCheckFeature {
  code: string;
  id: FeatureId;
}

/** Converts `EntitlementCheckFeature` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckFeatureSerializer = {
  parse(json: any, path = "$"): EntitlementCheckFeature {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "id"]),
      code: decodeString(json["code"], path, "code"),
      id: FeatureIdSerializer.parse(json["id"], decodePath(path, "id")),
    };
  },

  serialize(value: EntitlementCheckFeature): any {
    return {
      ...extraProperties(value, ["code", "id"]),
      code: value.code,
      id: FeatureIdSerializer.serialize(value.id),
    };
  },
};
