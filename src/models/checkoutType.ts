// this file is @generated
import { decodeString } from "../decode.js";

export const CheckoutType = {
  SelfServe: "SELF_SERVE",
  SubscriptionActivation: "SUBSCRIPTION_ACTIVATION",
  PlanChange: "PLAN_CHANGE",
  AddonPurchase: "ADDON_PURCHASE",
} as const;
export type CheckoutType =
  | (typeof CheckoutType)[keyof typeof CheckoutType]
  | (string & {});

/** Converts `CheckoutType` values from (`parse`) and to (`serialize`) their JSON form. */
export const CheckoutTypeSerializer = {
  parse(json: any, path = "$"): CheckoutType {
    return decodeString(json, path);
  },

  serialize(value: CheckoutType): any {
    return value;
  },
};
