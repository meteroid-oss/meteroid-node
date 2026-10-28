// this file is @generated
import { decodeObject } from "../decode.js";
import { type CreditDiscount, CreditDiscountSerializer } from "./creditDiscount.js";
import { type FixedDiscount, FixedDiscountSerializer } from "./fixedDiscount.js";
import {
  type PercentageDiscount,
  PercentageDiscountSerializer,
} from "./percentageDiscount.js";

export interface CouponDiscountPercentage extends PercentageDiscount {
  type: "PERCENTAGE";
}
export interface CouponDiscountFixed extends FixedDiscount {
  type: "FIXED";
}
export interface CouponDiscountCredit extends CreditDiscount {
  type: "CREDIT";
}

export type CouponDiscount =
  | CouponDiscountPercentage
  | CouponDiscountFixed
  | CouponDiscountCredit;

/** Converts `CouponDiscount` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponDiscountSerializer = {
  parse(json: any, path = "$"): CouponDiscount {
    decodeObject(json, path);
    switch (json["type"]) {
      case "PERCENTAGE":
        return {
          ...PercentageDiscountSerializer.parse(json, path),
          type: "PERCENTAGE",
        };
      case "FIXED":
        return {
          ...FixedDiscountSerializer.parse(json, path),
          type: "FIXED",
        };
      case "CREDIT":
        return {
          ...CreditDiscountSerializer.parse(json, path),
          type: "CREDIT",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: CouponDiscount): any {
    switch (value.type) {
      case "PERCENTAGE":
        return {
          ...PercentageDiscountSerializer.serialize(value),
          type: "PERCENTAGE",
        };
      case "FIXED":
        return {
          ...FixedDiscountSerializer.serialize(value),
          type: "FIXED",
        };
      case "CREDIT":
        return {
          ...CreditDiscountSerializer.serialize(value),
          type: "CREDIT",
        };
      default:
        return value;
    }
  },
};
