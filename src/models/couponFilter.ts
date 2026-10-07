// this file is @generated
import { decodeString } from "../decode.js";

export const CouponFilter = {
  All: "ALL",
  Active: "ACTIVE",
  Inactive: "INACTIVE",
  Archived: "ARCHIVED",
} as const;
export type CouponFilter =
  | (typeof CouponFilter)[keyof typeof CouponFilter]
  | (string & {});

/** Converts `CouponFilter` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponFilterSerializer = {
  parse(json: any, path = "$"): CouponFilter {
    return decodeString(json, path);
  },

  serialize(value: CouponFilter): any {
    return value;
  },
};
