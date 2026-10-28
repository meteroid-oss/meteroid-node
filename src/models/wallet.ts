// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type AutoTopUp, AutoTopUpSerializer } from "./autoTopUp.js";
import { type Currency, CurrencySerializer } from "./currency.js";
import {
  type SubscriptionCredit,
  SubscriptionCreditSerializer,
} from "./subscriptionCredit.js";
import { type UsageAtZero, UsageAtZeroSerializer } from "./usageAtZero.js";
/**
 * A customer's credit in one currency or credit unit. Amounts are minor units of it. Read with
 * `subscription_id`, every amount counts only the credit that subscription can use.
 */
export interface Wallet {
  /**
   * When `balance` and `unbilled_usage` were computed. They follow usage within a few seconds
   * while the balance is near zero or a threshold, and within a minute otherwise.
   */
  asOf?: Date | null | undefined;
  autoTopUp?: AutoTopUp | null | undefined;
  /**
   * What the customer has left: `credit_on_account` minus the part of `unbilled_usage` that
   * credit will pay. Never negative: usage beyond the credit stays in `unbilled_usage`, to be
   * invoiced. Low-balance alerts use it; automatic top-ups watch only its part that pays any
   * charge (credit that belongs to no subscription and is not limited to usage or products).
   * Absent, with `unbilled_usage` and `as_of`, until the customer's usage has been priced once.
   * With `subscription_id`: the credit that subscription can spend once every subscription's
   * unbilled usage is paid, minus its own unbilled usage no credit pays (negative then), as
   * `GET /wallets/check` reads it. Credit restricted to products it is not charged for is
   * left out. Credit that belongs to no subscription counts in the balance of every
   * subscription that can use it (see `shared_balance`): never add subscriptions' balances up.
   */
  balance?: number | null | undefined;
  /**
   * The ledger total: credit granted and effective, not yet applied to an invoice or expired,
   * whatever it applies to. Usage not invoiced yet is not deducted (see `balance`).
   */
  creditOnAccount: number;
  /** The part of `credit_on_account` that pays only usage charges. */
  creditOnAccountUsageOnly: number;
  /** The credit unit (its code) the wallet holds; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  currency?: Currency | null | undefined;
  /**
   * Ascending, distinct, at most 5. `wallet.balance_low` fires once when `balance` falls below
   * one; a drop below several at once fires once, for the lowest. All credit counts, including
   * credit that belongs to a subscription or is limited to usage or products, which
   * `wallet.depleted` leaves out: a wallet can be depleted without an alert firing.
   */
  lowBalanceThresholds: number[];
  /**
   * Usage stops as soon as the credit is used up, for at least one active subscription: by
   * `usage_at_zero`, or by the plan of a subscription charging usage in this wallet.
   */
  pausesAtZero: boolean;
  /**
   * With `subscription_id` only: the part of `balance` that belongs to no subscription, which
   * the customer's other subscriptions can spend too.
   */
  sharedBalance?: number | null | undefined;
  /**
   * The part of `credit_on_account` that belongs to a subscription, which only that
   * subscription's charges can use, per subscription. The rest pays any subscription.
   */
  subscriptionCredit: SubscriptionCredit[];
  /**
   * Usage recorded and priced but not invoiced yet, tax included, in minor units: what the
   * next invoices will charge for it, paid from credit as far as the credit goes. With
   * `subscription_id`, that subscription's usage only; other subscriptions' usage paid from
   * shared credit still lowers `balance`.
   */
  unbilledUsage?: number | null | undefined;
  /**
   * Credit unit wallets: the price this customer agreed for one credit, in major units of
   * `unit_price_currency`, as a decimal string (e.g. "0.0008"). Purchases and automatic
   * top-ups in that currency charge it instead of the list price, unless a purchase sets its
   * own `unit_price`. Absent: the list price applies.
   */
  unitPrice?: string | null | undefined;
  unitPriceCurrency?: Currency | null | undefined;
  /** Credit granted that takes effect later. */
  upcomingCredit: number;
  /**
   * What this customer's usage does once the credit a subscription can use for it is used up
   * (its own credit, credit that belongs to no subscription, and credit limited to the product:
   * the `balance` of `GET /wallets/check`). `FOLLOW_PLAN` applies the "when credit runs out"
   * rule of each subscription's plan.
   */
  usageAtZero: UsageAtZero;
}

/** Converts `Wallet` values from (`parse`) and to (`serialize`) their JSON form. */
export const WalletSerializer = {
  parse(json: any, path = "$"): Wallet {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "as_of",
        "auto_top_up",
        "balance",
        "credit_on_account",
        "credit_on_account_usage_only",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "low_balance_thresholds",
        "pauses_at_zero",
        "shared_balance",
        "subscription_credit",
        "unbilled_usage",
        "unit_price",
        "unit_price_currency",
        "upcoming_credit",
        "usage_at_zero",
      ]),
      asOf:
        json["as_of"] != null
          ? decodeDateTime(json["as_of"], path, "as_of")
          : json["as_of"],
      autoTopUp:
        json["auto_top_up"] != null
          ? AutoTopUpSerializer.parse(
              json["auto_top_up"],
              decodePath(path, "auto_top_up")
            )
          : json["auto_top_up"],
      balance:
        json["balance"] != null
          ? decodeInteger(json["balance"], path, "balance")
          : json["balance"],
      creditOnAccount: decodeInteger(
        json["credit_on_account"],
        path,
        "credit_on_account"
      ),
      creditOnAccountUsageOnly: decodeInteger(
        json["credit_on_account_usage_only"],
        path,
        "credit_on_account_usage_only"
      ),
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
      lowBalanceThresholds: decodeList(
        json["low_balance_thresholds"],
        path,
        "low_balance_thresholds",
        (item: any, p: string, i: number) => decodeInteger(item, p, i)
      ),
      pausesAtZero: decodeBoolean(json["pauses_at_zero"], path, "pauses_at_zero"),
      sharedBalance:
        json["shared_balance"] != null
          ? decodeInteger(json["shared_balance"], path, "shared_balance")
          : json["shared_balance"],
      subscriptionCredit: decodeList(
        json["subscription_credit"],
        path,
        "subscription_credit",
        (item: any, p: string, i: number) =>
          SubscriptionCreditSerializer.parse(item, decodePath(p, i))
      ),
      unbilledUsage:
        json["unbilled_usage"] != null
          ? decodeInteger(json["unbilled_usage"], path, "unbilled_usage")
          : json["unbilled_usage"],
      unitPrice:
        json["unit_price"] != null
          ? decodeString(json["unit_price"], path, "unit_price")
          : json["unit_price"],
      unitPriceCurrency:
        json["unit_price_currency"] != null
          ? CurrencySerializer.parse(
              json["unit_price_currency"],
              decodePath(path, "unit_price_currency")
            )
          : json["unit_price_currency"],
      upcomingCredit: decodeInteger(json["upcoming_credit"], path, "upcoming_credit"),
      usageAtZero: UsageAtZeroSerializer.parse(
        json["usage_at_zero"],
        decodePath(path, "usage_at_zero")
      ),
    };
  },

  serialize(value: Wallet): any {
    return {
      ...extraProperties(value, [
        "asOf",
        "autoTopUp",
        "balance",
        "creditOnAccount",
        "creditOnAccountUsageOnly",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "lowBalanceThresholds",
        "pausesAtZero",
        "sharedBalance",
        "subscriptionCredit",
        "unbilledUsage",
        "unitPrice",
        "unitPriceCurrency",
        "upcomingCredit",
        "usageAtZero",
      ]),
      as_of: value.asOf,
      auto_top_up:
        value.autoTopUp != null
          ? AutoTopUpSerializer.serialize(value.autoTopUp)
          : value.autoTopUp,
      balance: value.balance,
      credit_on_account: value.creditOnAccount,
      credit_on_account_usage_only: value.creditOnAccountUsageOnly,
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      low_balance_thresholds: value.lowBalanceThresholds,
      pauses_at_zero: value.pausesAtZero,
      shared_balance: value.sharedBalance,
      subscription_credit: value.subscriptionCredit.map((item: any) =>
        SubscriptionCreditSerializer.serialize(item)
      ),
      unbilled_usage: value.unbilledUsage,
      unit_price: value.unitPrice,
      unit_price_currency:
        value.unitPriceCurrency != null
          ? CurrencySerializer.serialize(value.unitPriceCurrency)
          : value.unitPriceCurrency,
      upcoming_credit: value.upcomingCredit,
      usage_at_zero: UsageAtZeroSerializer.serialize(value.usageAtZero),
    };
  },
};
