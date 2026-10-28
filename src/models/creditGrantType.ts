// this file is @generated
import { decodeString } from "../decode.js";
/**
 * PAID credit was bought, through Meteroid or outside it, and applies after tax like a payment.
 * PROMOTIONAL credit was given (included with a plan, a coupon, bonus credit, a goodwill grant):
 * it applies before tax, like a discount, so it is spent before paid credit. Credit-unit grants
 * are drawn together, whatever their type.
 */
export const CreditGrantType = {
  Paid: "PAID",
  Promotional: "PROMOTIONAL",
} as const;
export type CreditGrantType =
  | (typeof CreditGrantType)[keyof typeof CreditGrantType]
  | (string & {});

/** Converts `CreditGrantType` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantTypeSerializer = {
  parse(json: any, path = "$"): CreditGrantType {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantType): any {
    return value;
  },
};
