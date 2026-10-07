// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface CouponLineItem {
  couponId: string;
  name: string;
  total: number;
}

/** Converts `CouponLineItem` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponLineItemSerializer = {
  parse(json: any, path = "$"): CouponLineItem {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["coupon_id", "name", "total"]),
      couponId: decodeString(json["coupon_id"], path, "coupon_id"),
      name: decodeString(json["name"], path, "name"),
      total: decodeInteger(json["total"], path, "total"),
    };
  },

  serialize(value: CouponLineItem): any {
    return {
      ...extraProperties(value, ["couponId", "name", "total"]),
      coupon_id: value.couponId,
      name: value.name,
      total: value.total,
    };
  },
};
