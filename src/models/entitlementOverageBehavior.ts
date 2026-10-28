// this file is @generated
import { decodeString } from "../decode.js";
/** What happens once usage reaches the limit. */
export const EntitlementOverageBehavior = {
  Block: "BLOCK",
  Allow: "ALLOW",
} as const;
export type EntitlementOverageBehavior =
  | (typeof EntitlementOverageBehavior)[keyof typeof EntitlementOverageBehavior]
  | (string & {});

/** Converts `EntitlementOverageBehavior` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementOverageBehaviorSerializer = {
  parse(json: any, path = "$"): EntitlementOverageBehavior {
    return decodeString(json, path);
  },

  serialize(value: EntitlementOverageBehavior): any {
    return value;
  },
};
