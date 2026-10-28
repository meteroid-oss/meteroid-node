// this file is @generated
import { decodeString } from "../decode.js";
/** Which subscriptions a promotional credit coupon's credit pays. */
export const CouponCreditScope = {
  Customer: "CUSTOMER",
  Subscription: "SUBSCRIPTION",
} as const;
export type CouponCreditScope =
  | (typeof CouponCreditScope)[keyof typeof CouponCreditScope]
  | (string & {});

/** Converts `CouponCreditScope` values from (`parse`) and to (`serialize`) their JSON form. */
export const CouponCreditScopeSerializer = {
  parse(json: any, path = "$"): CouponCreditScope {
    return decodeString(json, path);
  },

  serialize(value: CouponCreditScope): any {
    return value;
  },
};
