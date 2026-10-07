// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type EntitlementProductRef,
  EntitlementProductRefSerializer,
} from "./entitlementProductRef.js";
import { type FeatureId, FeatureIdSerializer } from "./featureId.js";

export interface FeatureRef {
  /** Unique key used to reference this feature in your code. Cannot be changed after creation. */
  code: string;
  id: FeatureId;
  name: string;
  product?: EntitlementProductRef | null | undefined;
}

/** Converts `FeatureRef` values from (`parse`) and to (`serialize`) their JSON form. */
export const FeatureRefSerializer = {
  parse(json: any, path = "$"): FeatureRef {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["code", "id", "name", "product"]),
      code: decodeString(json["code"], path, "code"),
      id: FeatureIdSerializer.parse(json["id"], decodePath(path, "id")),
      name: decodeString(json["name"], path, "name"),
      product:
        json["product"] != null
          ? EntitlementProductRefSerializer.parse(
              json["product"],
              decodePath(path, "product")
            )
          : json["product"],
    };
  },

  serialize(value: FeatureRef): any {
    return {
      ...extraProperties(value, ["code", "id", "name", "product"]),
      code: value.code,
      id: FeatureIdSerializer.serialize(value.id),
      name: value.name,
      product:
        value.product != null
          ? EntitlementProductRefSerializer.serialize(value.product)
          : value.product,
    };
  },
};
