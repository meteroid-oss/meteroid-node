// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type PriceComponentId, PriceComponentIdSerializer } from "./priceComponentId.js";
import { type ProductId, ProductIdSerializer } from "./productId.js";
import { type SubscriptionFee, SubscriptionFeeSerializer } from "./subscriptionFee.js";
import {
  type SubscriptionFeeBillingPeriodEnum,
  SubscriptionFeeBillingPeriodEnumSerializer,
} from "./subscriptionFeeBillingPeriodEnum.js";

export interface SubscriptionComponent {
  fee: SubscriptionFee;
  name: string;
  period: SubscriptionFeeBillingPeriodEnum;
  priceComponentId?: PriceComponentId | null | undefined;
  productId?: ProductId | null | undefined;
}

/** Converts `SubscriptionComponent` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionComponentSerializer = {
  parse(json: any, path = "$"): SubscriptionComponent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "fee",
        "name",
        "period",
        "price_component_id",
        "product_id",
      ]),
      fee: SubscriptionFeeSerializer.parse(json["fee"], decodePath(path, "fee")),
      name: decodeString(json["name"], path, "name"),
      period: SubscriptionFeeBillingPeriodEnumSerializer.parse(
        json["period"],
        decodePath(path, "period")
      ),
      priceComponentId:
        json["price_component_id"] != null
          ? PriceComponentIdSerializer.parse(
              json["price_component_id"],
              decodePath(path, "price_component_id")
            )
          : json["price_component_id"],
      productId:
        json["product_id"] != null
          ? ProductIdSerializer.parse(json["product_id"], decodePath(path, "product_id"))
          : json["product_id"],
    };
  },

  serialize(value: SubscriptionComponent): any {
    return {
      ...extraProperties(value, [
        "fee",
        "name",
        "period",
        "priceComponentId",
        "productId",
      ]),
      fee: SubscriptionFeeSerializer.serialize(value.fee),
      name: value.name,
      period: SubscriptionFeeBillingPeriodEnumSerializer.serialize(value.period),
      price_component_id:
        value.priceComponentId != null
          ? PriceComponentIdSerializer.serialize(value.priceComponentId)
          : value.priceComponentId,
      product_id:
        value.productId != null
          ? ProductIdSerializer.serialize(value.productId)
          : value.productId,
    };
  },
};
