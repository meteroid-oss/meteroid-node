// this file is @generated
import { decodeString } from "../decode.js";
/**
 * What reaching the amount does. A SOFT budget only sends alerts; a HARD budget also makes the
 * entitlement check answer BUDGET_EXCEEDED for the features whose usage counts in its spend. A
 * HARD budget on one subscription refuses the checks naming that subscription, and the checks
 * naming none once every subscription charging the feature's metric is refused by its own.
 */
export const BudgetBehavior = {
  Soft: "SOFT",
  Hard: "HARD",
} as const;
export type BudgetBehavior =
  | (typeof BudgetBehavior)[keyof typeof BudgetBehavior]
  | (string & {});

/** Converts `BudgetBehavior` values from (`parse`) and to (`serialize`) their JSON form. */
export const BudgetBehaviorSerializer = {
  parse(json: any, path = "$"): BudgetBehavior {
    return decodeString(json, path);
  },

  serialize(value: BudgetBehavior): any {
    return value;
  },
};
