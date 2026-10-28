// this file is @generated
import { decodeString } from "../decode.js";

export const EntitlementCheckLimitBehavior = {
  Track: "TRACK",
  Soft: "SOFT",
  Hard: "HARD",
} as const;
export type EntitlementCheckLimitBehavior =
  | (typeof EntitlementCheckLimitBehavior)[keyof typeof EntitlementCheckLimitBehavior]
  | (string & {});

/** Converts `EntitlementCheckLimitBehavior` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckLimitBehaviorSerializer = {
  parse(json: any, path = "$"): EntitlementCheckLimitBehavior {
    return decodeString(json, path);
  },

  serialize(value: EntitlementCheckLimitBehavior): any {
    return value;
  },
};
