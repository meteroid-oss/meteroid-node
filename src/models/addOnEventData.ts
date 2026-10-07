// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type AddOnId, AddOnIdSerializer } from "./addOnId.js";
import { type PriceId, PriceIdSerializer } from "./priceId.js";
import {
  type ProductFeeTypeEnum,
  ProductFeeTypeEnumSerializer,
} from "./productFeeTypeEnum.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";

export interface AddOnEventData {
  addOnId: AddOnId;
  createdAt: Date;
  description?: string | null | undefined;
  feeType?: ProductFeeTypeEnum | null | undefined;
  maxInstancesPerSubscription?: number | null | undefined;
  name: string;
  priceId: PriceId;
  productId: ProductId;
  selfServiceable: boolean;
}

/** Converts `AddOnEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const AddOnEventDataSerializer = {
  parse(json: any, path = "$"): AddOnEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "add_on_id",
        "created_at",
        "description",
        "fee_type",
        "max_instances_per_subscription",
        "name",
        "price_id",
        "product_id",
        "self_serviceable",
      ]),
      addOnId: AddOnIdSerializer.parse(json["add_on_id"], decodePath(path, "add_on_id")),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      feeType:
        json["fee_type"] != null
          ? ProductFeeTypeEnumSerializer.parse(
              json["fee_type"],
              decodePath(path, "fee_type")
            )
          : json["fee_type"],
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
      selfServiceable: decodeBoolean(json["self_serviceable"], path, "self_serviceable"),
    };
  },

  serialize(value: AddOnEventData): any {
    return {
      ...extraProperties(value, [
        "addOnId",
        "createdAt",
        "description",
        "feeType",
        "maxInstancesPerSubscription",
        "name",
        "priceId",
        "productId",
        "selfServiceable",
      ]),
      add_on_id: AddOnIdSerializer.serialize(value.addOnId),
      created_at: value.createdAt,
      description: value.description,
      fee_type:
        value.feeType != null
          ? ProductFeeTypeEnumSerializer.serialize(value.feeType)
          : value.feeType,
      max_instances_per_subscription: value.maxInstancesPerSubscription,
      name: value.name,
      price_id: PriceIdSerializer.serialize(value.priceId),
      product_id: ProductIdSerializer.serialize(value.productId),
      self_serviceable: value.selfServiceable,
    };
  },
};
