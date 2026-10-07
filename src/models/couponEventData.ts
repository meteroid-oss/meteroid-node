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

export interface CouponEventData {
  code: string;
  couponId: CouponId;
  createdAt: Date;
  description: string;
  disabled: boolean;
  discount: CouponDiscount;
  expiresAt?: Date | null | undefined;
  recurringValue?: number | null | undefined;
  redemptionLimit?: number | null | undefined;
  reusable: boolean;
}

/** Converts `CouponEventData` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponEventDataSerializer = {
  parse(json: any, path = "$"): CouponEventData {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "code",
        "coupon_id",
        "created_at",
        "description",
        "disabled",
        "discount",
        "expires_at",
        "recurring_value",
        "redemption_limit",
        "reusable",
      ]),
      code: decodeString(json["code"], path, "code"),
      couponId: CouponIdSerializer.parse(
        json["coupon_id"],
        decodePath(path, "coupon_id")
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
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

  serialize(value: CouponEventData): any {
    return {
      ...extraProperties(value, [
        "code",
        "couponId",
        "createdAt",
        "description",
        "disabled",
        "discount",
        "expiresAt",
        "recurringValue",
        "redemptionLimit",
        "reusable",
      ]),
      code: value.code,
      coupon_id: CouponIdSerializer.serialize(value.couponId),
      created_at: value.createdAt,
      description: value.description,
      disabled: value.disabled,
      discount: CouponDiscountSerializer.serialize(value.discount),
      expires_at: value.expiresAt,
      recurring_value: value.recurringValue,
      redemption_limit: value.redemptionLimit,
      reusable: value.reusable,
    };
  },
};
