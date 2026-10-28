// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type Currency, CurrencySerializer } from "./currency.js";
/** Whether a customer may keep consuming what their prepaid credit pays for. */
export interface WalletCheck {
  /** When `balance` was computed. */
  asOf: Date;
  /**
   * The balance: credit on account net of the usage not invoiced yet that it will pay, in
   * minor units of `currency` or `credit_unit`; never negative for the customer as a whole,
   * as `balance` of `GET /wallets`. With `product_id`, only the credit that can pay for that
   * product, net of its usage no credit covers. With `subscription_id`, only the credit that
   * subscription can spend (credit restricted to products it is not charged for left out),
   * net of its usage no credit covers; credit that belongs to no subscription counts in every
   * subscription's balance (see `shared_balance`).
   */
  balance: number;
  /** The credit unit (its code) checked; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: `balance` is in integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  currency?: Currency | null | undefined;
  /**
   * Always false: `balance` may lag usage by a few seconds (see `as_of`), and the answer is
   * cached for one second.
   */
  exact: boolean;
  /**
   * True once `balance` is at or below zero, or, with `subscription_id`, once no credit is
   * left for some of its usage. Independent of `has_access`: a wallet that allows overage
   * still reports this, so the caller can warn without refusing.
   */
  exhausted: boolean;
  /**
   * False only once `balance` is at or below zero and `blocks_when_exhausted` is true.
   * Customers without a wallet in `currency` do not prepay, and always have access. With
   * `subscription_id`: false when `blocks_when_exhausted` is true and no credit that
   * subscription can spend is left for some of its usage (of `product_id` when given), as the
   * access gate refuses it; a subscription charged no usage in the wallet keeps access.
   */
  hasAccess: boolean;
  /** Age of `balance`, in milliseconds. */
  lagMs: number;
  /**
   * Whether usage is refused as soon as the credit is used up: the wallet's `usage_at_zero`,
   * else the plan of the subscription checked (of any active subscription without one). A plan
   * that invoices usage up to a cap refuses it past the cap only, as `has_access` reports.
   */
  pausesAtZero: boolean;
  /**
   * With `subscription_id` only: the part of `balance` that belongs to no subscription, which
   * the customer's other subscriptions can spend too.
   */
  sharedBalance?: number | null | undefined;
}

/** Converts `WalletCheck` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletCheckSerializer = {
  parse(json: any, path = "$"): WalletCheck {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "as_of",
        "balance",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "exact",
        "exhausted",
        "has_access",
        "lag_ms",
        "pauses_at_zero",
        "shared_balance",
      ]),
      asOf: decodeDateTime(json["as_of"], path, "as_of"),
      balance: decodeInteger(json["balance"], path, "balance"),
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      creditUnitPrecision:
        json["credit_unit_precision"] != null
          ? decodeInteger(json["credit_unit_precision"], path, "credit_unit_precision")
          : json["credit_unit_precision"],
      currency:
        json["currency"] != null
          ? CurrencySerializer.parse(json["currency"], decodePath(path, "currency"))
          : json["currency"],
      exact: decodeBoolean(json["exact"], path, "exact"),
      exhausted: decodeBoolean(json["exhausted"], path, "exhausted"),
      hasAccess: decodeBoolean(json["has_access"], path, "has_access"),
      lagMs: decodeInteger(json["lag_ms"], path, "lag_ms"),
      pausesAtZero: decodeBoolean(json["pauses_at_zero"], path, "pauses_at_zero"),
      sharedBalance:
        json["shared_balance"] != null
          ? decodeInteger(json["shared_balance"], path, "shared_balance")
          : json["shared_balance"],
    };
  },

  serialize(value: WalletCheck): any {
    return {
      ...extraProperties(value, [
        "asOf",
        "balance",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "exact",
        "exhausted",
        "hasAccess",
        "lagMs",
        "pausesAtZero",
        "sharedBalance",
      ]),
      as_of: value.asOf,
      balance: value.balance,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      exact: value.exact,
      exhausted: value.exhausted,
      has_access: value.hasAccess,
      lag_ms: value.lagMs,
      pauses_at_zero: value.pausesAtZero,
      shared_balance: value.sharedBalance,
    };
  },
};
