// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type BillingPeriodEnum,
  BillingPeriodEnumSerializer,
} from "./billingPeriodEnum.js";
import { type Pricing, PricingSerializer } from "./pricing.js";

export interface PriceInput {
  cadence: BillingPeriodEnum;
  currency: string;
  pricing: Pricing;
}

/** Converts `PriceInput` values from (`parse`) and to (`serialize`) their JSON form. */
export const PriceInputSerializer = {
  parse(json: any, path = "$"): PriceInput {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["cadence", "currency", "pricing"]),
      cadence: BillingPeriodEnumSerializer.parse(
        json["cadence"],
        decodePath(path, "cadence")
      ),
      currency: decodeString(json["currency"], path, "currency"),
      pricing: PricingSerializer.parse(json["pricing"], decodePath(path, "pricing")),
    };
  },

  serialize(value: PriceInput): any {
    return {
      ...extraProperties(value, ["cadence", "currency", "pricing"]),
      cadence: BillingPeriodEnumSerializer.serialize(value.cadence),
      currency: value.currency,
      pricing: PricingSerializer.serialize(value.pricing),
    };
  },
};
