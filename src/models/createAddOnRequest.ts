// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type PriceId, PriceIdSerializer } from "./priceId.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface CreateAddOnRequest {
  description?: string | null | undefined;
  maxInstancesPerSubscription?: number | null | undefined;
  name: string;
  priceId: PriceId;
  productId: ProductId;
  selfServiceable?: boolean | undefined;
}

/** Converts `CreateAddOnRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateAddOnRequestSerializer = {
  parse(json: any, path = "$"): CreateAddOnRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "description",
        "max_instances_per_subscription",
        "name",
        "price_id",
        "product_id",
        "self_serviceable",
      ]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      maxInstancesPerSubscription:
        json["max_instances_per_subscription"] != null
          ? decodeInteger(
              json["max_instances_per_subscription"],
              path,
              "max_instances_per_subscription"
            )
          : json["max_instances_per_subscription"],
      name: decodeString(json["name"], path, "name"),
      priceId: PriceIdSerializer.parse(json["price_id"], decodePath(path, "price_id")),
      productId: ProductIdSerializer.parse(
        json["product_id"],
        decodePath(path, "product_id")
      ),
      selfServiceable:
        json["self_serviceable"] != null
          ? decodeBoolean(json["self_serviceable"], path, "self_serviceable")
          : undefined,
    };
  },

  serialize(value: CreateAddOnRequest): any {
    return {
      ...extraProperties(value, [
        "description",
        "maxInstancesPerSubscription",
        "name",
        "priceId",
        "productId",
        "selfServiceable",
      ]),
      description: value.description,
      max_instances_per_subscription: value.maxInstancesPerSubscription,
      name: value.name,
      price_id: PriceIdSerializer.serialize(value.priceId),
      product_id: ProductIdSerializer.serialize(value.productId),
      self_serviceable: value.selfServiceable,
    };
  },
};
