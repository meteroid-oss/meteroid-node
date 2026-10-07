// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type AppliedCoupon, AppliedCouponSerializer } from "./appliedCoupon.js";
import {
  type SubscriptionCoupon,
  SubscriptionCouponSerializer,
} from "./subscriptionCoupon.js";

export interface AppliedCouponDetailed {
  appliedCoupon: AppliedCoupon;
  coupon: SubscriptionCoupon;
}

/** Converts `AppliedCouponDetailed` values from (`parse`) and to (`serialize`) their JSON form. */
export const AppliedCouponDetailedSerializer = {
  parse(json: any, path = "$"): AppliedCouponDetailed {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["applied_coupon", "coupon"]),
      appliedCoupon: AppliedCouponSerializer.parse(
        json["applied_coupon"],
        decodePath(path, "applied_coupon")
      ),
      coupon: SubscriptionCouponSerializer.parse(
        json["coupon"],
        decodePath(path, "coupon")
      ),
    };
  },

  serialize(value: AppliedCouponDetailed): any {
    return {
      ...extraProperties(value, ["appliedCoupon", "coupon"]),
      applied_coupon: AppliedCouponSerializer.serialize(value.appliedCoupon),
      coupon: SubscriptionCouponSerializer.serialize(value.coupon),
    };
  },
};
