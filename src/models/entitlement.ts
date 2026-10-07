// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EntitlementId, EntitlementIdSerializer } from "./entitlementId.js";
import { type EntitlementValue, EntitlementValueSerializer } from "./entitlementValue.js";
import { type FeatureId, FeatureIdSerializer } from "./featureId.js";
/** A raw entitlement row attached to one entity (feature, plan version, add-on, or subscription). */
export interface Entitlement {
  createdAt: Date;
  featureId: FeatureId;
  id: EntitlementId;
  updatedAt: Date;
  value: EntitlementValue;
}

/** Converts `Entitlement` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementSerializer = {
  parse(json: any, path = "$"): Entitlement {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["created_at", "feature_id", "id", "updated_at", "value"]),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      featureId: FeatureIdSerializer.parse(
        json["feature_id"],
        decodePath(path, "feature_id")
      ),
      id: EntitlementIdSerializer.parse(json["id"], decodePath(path, "id")),
      updatedAt: decodeDateTime(json["updated_at"], path, "updated_at"),
      value: EntitlementValueSerializer.parse(json["value"], decodePath(path, "value")),
    };
  },

  serialize(value: Entitlement): any {
    return {
      ...extraProperties(value, ["createdAt", "featureId", "id", "updatedAt", "value"]),
      created_at: value.createdAt,
      feature_id: FeatureIdSerializer.serialize(value.featureId),
      id: EntitlementIdSerializer.serialize(value.id),
      updated_at: value.updatedAt,
      value: EntitlementValueSerializer.serialize(value.value),
    };
  },
};
