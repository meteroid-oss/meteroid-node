// this file is @generated
import { extraProperties } from "../json.js";
import { type EntitlementValue, EntitlementValueSerializer } from "./entitlementValue.js";
import { type FeatureType, FeatureTypeSerializer } from "./featureType.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface CreateFeatureRequest {
  /** Unique key used to reference this feature in your code. Cannot be changed after creation. */
  code: string;
  description?: string | null | undefined;
  entitlement?: EntitlementValue | null | undefined;
  /** Fixed at creation — a feature never changes type. */
  featureType: FeatureType;
  name: string;
  productId?: ProductId | null | undefined;
}

/** Converts `CreateFeatureRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateFeatureRequestSerializer = {
  parse(json: any): CreateFeatureRequest {
    return {
      ...extraProperties(json, [
        "code",
        "description",
        "entitlement",
        "feature_type",
        "name",
        "product_id",
      ]),
      code: json["code"],
      description: json["description"],
      entitlement:
        json["entitlement"] != null
          ? EntitlementValueSerializer.parse(json["entitlement"])
          : json["entitlement"],
      featureType: FeatureTypeSerializer.parse(json["feature_type"]),
      name: json["name"],
      productId:
        json["product_id"] != null
          ? ProductIdSerializer.parse(json["product_id"])
          : json["product_id"],
    };
  },

  serialize(value: CreateFeatureRequest): any {
    return {
      ...extraProperties(value, [
        "code",
        "description",
        "entitlement",
        "featureType",
        "name",
        "productId",
      ]),
      code: value.code,
      description: value.description,
      entitlement:
        value.entitlement != null
          ? EntitlementValueSerializer.serialize(value.entitlement)
          : value.entitlement,
      feature_type: FeatureTypeSerializer.serialize(value.featureType),
      name: value.name,
      product_id:
        value.productId != null
          ? ProductIdSerializer.serialize(value.productId)
          : value.productId,
    };
  },
};
