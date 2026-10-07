// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type EntitlementValue, EntitlementValueSerializer } from "./entitlementValue.js";
import { type FeatureId, FeatureIdSerializer } from "./featureId.js";
/** One entitlement to create: which feature, and the value granted by the entity. */
export interface EntitlementSpecRequest {
  featureId: FeatureId;
  value: EntitlementValue;
}

/** Converts `EntitlementSpecRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementSpecRequestSerializer = {
  parse(json: any, path = "$"): EntitlementSpecRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["feature_id", "value"]),
      featureId: FeatureIdSerializer.parse(
        json["feature_id"],
        decodePath(path, "feature_id")
      ),
      value: EntitlementValueSerializer.parse(json["value"], decodePath(path, "value")),
    };
  },

  serialize(value: EntitlementSpecRequest): any {
    return {
      ...extraProperties(value, ["featureId", "value"]),
      feature_id: FeatureIdSerializer.serialize(value.featureId),
      value: EntitlementValueSerializer.serialize(value.value),
    };
  },
};
