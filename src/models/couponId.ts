// this file is @generated
import { decodeString } from "../decode.js";

export type CouponId = string;

/** Converts `CouponId` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponIdSerializer = {
  parse(json: any, path = "$"): CouponId {
    return decodeString(json, path);
  },

  serialize(value: CouponId): any {
    return value;
  },
};
