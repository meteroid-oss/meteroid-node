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
import { type CouponDiscount, CouponDiscountSerializer } from "./couponDiscount.js";
import { type CouponId, CouponIdSerializer } from "./couponId.js";
/**
 * Coupon as embedded in subscription details — a subset of the `Coupon` resource
 * returned by the coupons API.
 */
export interface SubscriptionCoupon {
  code: string;
  description: string;
  disabled: boolean;
  discount: CouponDiscount;
  expiresAt?: Date | null | undefined;
  id: CouponId;
  recurringValue?: number | null | undefined;
  redemptionLimit?: number | null | undefined;
  reusable: boolean;
}

/** Converts `SubscriptionCoupon` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionCouponSerializer = {
  parse(json: any, path = "$"): SubscriptionCoupon {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "code",
        "description",
        "disabled",
        "discount",
        "expires_at",
        "id",
        "recurring_value",
        "redemption_limit",
        "reusable",
      ]),
      code: decodeString(json["code"], path, "code"),
      description: decodeString(json["description"], path, "description"),
      disabled: decodeBoolean(json["disabled"], path, "disabled"),
      discount: CouponDiscountSerializer.parse(
        json["discount"],
        decodePath(path, "discount")
      ),
      expiresAt:
        json["expires_at"] != null
          ? decodeDateTime(json["expires_at"], path, "expires_at")
          : json["expires_at"],
      id: CouponIdSerializer.parse(json["id"], decodePath(path, "id")),
      recurringValue:
        json["recurring_value"] != null
          ? decodeInteger(json["recurring_value"], path, "recurring_value")
          : json["recurring_value"],
      redemptionLimit:
        json["redemption_limit"] != null
          ? decodeInteger(json["redemption_limit"], path, "redemption_limit")
          : json["redemption_limit"],
      reusable: decodeBoolean(json["reusable"], path, "reusable"),
    };
  },

  serialize(value: SubscriptionCoupon): any {
    return {
      ...extraProperties(value, [
        "code",
        "description",
        "disabled",
        "discount",
        "expiresAt",
        "id",
        "recurringValue",
        "redemptionLimit",
        "reusable",
      ]),
      code: value.code,
      description: value.description,
      disabled: value.disabled,
      discount: CouponDiscountSerializer.serialize(value.discount),
      expires_at: value.expiresAt,
      id: CouponIdSerializer.serialize(value.id),
      recurring_value: value.recurringValue,
      redemption_limit: value.redemptionLimit,
      reusable: value.reusable,
    };
  },
};
