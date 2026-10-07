// this file is @generated
import { decodeString } from "../decode.js";

export const SubscriptionActivationConditionEnum = {
  OnStart: "ON_START",
  OnCheckout: "ON_CHECKOUT",
  Manual: "MANUAL",
} as const;
export type SubscriptionActivationConditionEnum =
  | (typeof SubscriptionActivationConditionEnum)[keyof typeof SubscriptionActivationConditionEnum]
  | (string & {});

/** Converts `SubscriptionActivationConditionEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionActivationConditionEnumSerializer = {
  parse(json: any, path = "$"): SubscriptionActivationConditionEnum {
    return decodeString(json, path);
  },

  serialize(value: SubscriptionActivationConditionEnum): any {
    return value;
  },
};
