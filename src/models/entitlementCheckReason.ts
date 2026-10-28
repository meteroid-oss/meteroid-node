// this file is @generated
import { decodeString } from "../decode.js";

export const EntitlementCheckReason = {
  WithinLimit: "WITHIN_LIMIT",
  LimitReached: "LIMIT_REACHED",
  NoEntitlement: "NO_ENTITLEMENT",
  Disabled: "DISABLED",
  BudgetExceeded: "BUDGET_EXCEEDED",
  InsufficientBalance: "INSUFFICIENT_BALANCE",
  TooManyGroups: "TOO_MANY_GROUPS",
} as const;
export type EntitlementCheckReason =
  | (typeof EntitlementCheckReason)[keyof typeof EntitlementCheckReason]
  | (string & {});

/** Converts `EntitlementCheckReason` values from (`parse`) and to (`serialize`) their JSON form. */
export const EntitlementCheckReasonSerializer = {
  parse(json: any, path = "$"): EntitlementCheckReason {
    return decodeString(json, path);
  },

  serialize(value: EntitlementCheckReason): any {
    return value;
  },
};
