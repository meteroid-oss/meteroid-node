// this file is @generated
import { decodeString } from "../decode.js";
/** Who set the budget: you (TENANT) or the customer, from the portal (CUSTOMER). */
export const BudgetAuthor = {
  Tenant: "TENANT",
  Customer: "CUSTOMER",
} as const;
export type BudgetAuthor =
  | (typeof BudgetAuthor)[keyof typeof BudgetAuthor]
  | (string & {});

/** Converts `BudgetAuthor` values from (`parse`) and to (`serialize`) their JSON form. */
export const BudgetAuthorSerializer = {
  parse(json: any, path = "$"): BudgetAuthor {
    return decodeString(json, path);
  },

  serialize(value: BudgetAuthor): any {
    return value;
  },
};
