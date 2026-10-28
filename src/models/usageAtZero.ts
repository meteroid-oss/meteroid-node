// this file is @generated
import { decodeString } from "../decode.js";
/**
 * What a customer's usage does once the credit it can use runs out: what the subscription's plan
 * says (`FOLLOW_PLAN`), or always or never refused for this customer.
 */
export const UsageAtZero = {
  FollowPlan: "FOLLOW_PLAN",
  AlwaysPause: "ALWAYS_PAUSE",
  NeverPause: "NEVER_PAUSE",
} as const;
export type UsageAtZero = (typeof UsageAtZero)[keyof typeof UsageAtZero] | (string & {});

/** Converts `UsageAtZero` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageAtZeroSerializer = {
  parse(json: any, path = "$"): UsageAtZero {
    return decodeString(json, path);
  },

  serialize(value: UsageAtZero): any {
    return value;
  },
};
