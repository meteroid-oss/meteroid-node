// this file is @generated
import { decodeString } from "../decode.js";
/**
 * The group a grant is shown in, from where it came from and what it pays:
 * - INCLUDED: credit a subscription's plan includes, which renews with it;
 * - PREPAID: credit bought (purchases, top-ups, paid packs, credit paid for outside Meteroid);
 * - BONUS: credit given (the bonus part of discounted credit, promo codes, welcome credit);
 * - ACCOUNT_BALANCE: the customer's money that pays any invoice (credit notes, returned invoices,
 *   the balance carried from before credit grants, credit added for any charge).
 */
export const CreditGrantKind = {
  Included: "INCLUDED",
  Prepaid: "PREPAID",
  Bonus: "BONUS",
  AccountBalance: "ACCOUNT_BALANCE",
} as const;
export type CreditGrantKind =
  | (typeof CreditGrantKind)[keyof typeof CreditGrantKind]
  | (string & {});

/** Converts `CreditGrantKind` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantKindSerializer = {
  parse(json: any, path = "$"): CreditGrantKind {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantKind): any {
    return value;
  },
};
