// this file is @generated
import { decodeString } from "../decode.js";

export type AppliedCouponId = string;

/** Converts `AppliedCouponId` values from (`parse`) and to (`serialize`) their JSON form. */
export const AppliedCouponIdSerializer = {
  parse(json: any, path = "$"): AppliedCouponId {
    return decodeString(json, path);
  },

  serialize(value: AppliedCouponId): any {
    return value;
  },
};
