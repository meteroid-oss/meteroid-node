// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type CouponCreditScope,
  CouponCreditScopeSerializer,
} from "./couponCreditScope.js";
/**
 * Promotional credit added to the customer's credit balance when the subscription the coupon is
 * redeemed on starts. It never discounts an invoice and applies before tax. A customer redeems
 * it at most once, so the coupon cannot be `reusable`. Its code is case-insensitive: it is stored
 * upper-case and redeemed whatever the case.
 */
export interface CreditDiscount {
  /** Credit added per redemption, in major units (e.g. "25.00"). */
  amount: string;
  /** ISO 4217 code; it must match the currency of the subscription the coupon is redeemed on. */
  currency: string;
  /** Days the credit stays spendable after redemption, 1 to 3660. Absent: it never expires. */
  expiresInDays?: number | null | undefined;
  /**
   * CUSTOMER (default): the credit pays any of the customer's subscriptions. SUBSCRIPTION: the
   * credit pays only the subscription the code is redeemed on, and ends with it.
   */
  scope?: CouponCreditScope | undefined;
  type: "CREDIT";
}

/** Converts `CreditDiscount` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditDiscountSerializer = {
  parse(json: any, path = "$"): CreditDiscount {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "currency",
        "expires_in_days",
        "scope",
        "type",
      ]),
      amount: decodeString(json["amount"], path, "amount"),
      currency: decodeString(json["currency"], path, "currency"),
      expiresInDays:
        json["expires_in_days"] != null
          ? decodeInteger(json["expires_in_days"], path, "expires_in_days")
          : json["expires_in_days"],
      scope:
        json["scope"] != null
          ? CouponCreditScopeSerializer.parse(json["scope"], decodePath(path, "scope"))
          : undefined,
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CREDIT")
          : "CREDIT",
    };
  },

  serialize(value: CreditDiscount): any {
    return {
      ...extraProperties(value, ["amount", "currency", "expiresInDays", "scope", "type"]),
      amount: value.amount,
      currency: value.currency,
      expires_in_days: value.expiresInDays,
      scope:
        value.scope != null
          ? CouponCreditScopeSerializer.serialize(value.scope)
          : undefined,
      type: value.type ?? "CREDIT",
    };
  },
};
