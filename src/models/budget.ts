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
import { type BudgetAuthor, BudgetAuthorSerializer } from "./budgetAuthor.js";
import { type BudgetBehavior, BudgetBehaviorSerializer } from "./budgetBehavior.js";
import { type BudgetPeriod, BudgetPeriodSerializer } from "./budgetPeriod.js";
import { type Currency, CurrencySerializer } from "./currency.js";
/**
 * A spending limit for one currency, set by you or by the customer, with alerts at percentages
 * of it. It counts the customer's whole spend, or one subscription's. A HARD budget also refuses
 * access once reached. A budget never charges the customer.
 */
export interface Budget {
  /** In minor units of the currency or credit unit. */
  amount: number;
  archivedAt?: Date | null | undefined;
  /** When `estimated_spend` was last measured. */
  asOf?: Date | null | undefined;
  behavior: BudgetBehavior;
  createdAt: Date;
  createdBy: BudgetAuthor;
  /** The credit unit (its code) whose usage the budget counts; absent for a currency. */
  creditUnit?: string | null | undefined;
  /** Decimal places of `credit_unit`: amounts are integers of 10^-precision credit. */
  creditUnitPrecision?: number | null | undefined;
  currency?: Currency | null | undefined;
  /**
   * Spend in the current billing period, including usage not invoiced yet, in minor units.
   * Absent until first measured.
   */
  estimatedSpend?: number | null | undefined;
  /** Always false: the estimate prices usage that is not yet invoiced. */
  exact: boolean;
  id: string;
  period?: BudgetPeriod | null | undefined;
  /** The subscription whose spend the budget counts; null when it counts the whole customer's. */
  subscriptionId?: string | null | undefined;
  /** Percentages of the amount at which an alert is sent. */
  thresholds: number[];
  updatedAt: Date;
  /** Send it back as `expected_version` when patching. */
  version: number;
}

/** Converts `Budget` values from (`parse`) and to (`serialize`) their JSON form. */
export const BudgetSerializer = {
  parse(json: any, path = "$"): Budget {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "archived_at",
        "as_of",
        "behavior",
        "created_at",
        "created_by",
        "credit_unit",
        "credit_unit_precision",
        "currency",
        "estimated_spend",
        "exact",
        "id",
        "period",
        "subscription_id",
        "thresholds",
        "updated_at",
        "version",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      archivedAt:
        json["archived_at"] != null
          ? decodeDateTime(json["archived_at"], path, "archived_at")
          : json["archived_at"],
      asOf:
        json["as_of"] != null
          ? decodeDateTime(json["as_of"], path, "as_of")
          : json["as_of"],
      behavior: BudgetBehaviorSerializer.parse(
        json["behavior"],
        decodePath(path, "behavior")
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      createdBy: BudgetAuthorSerializer.parse(
        json["created_by"],
        decodePath(path, "created_by")
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
      estimatedSpend:
        json["estimated_spend"] != null
          ? decodeInteger(json["estimated_spend"], path, "estimated_spend")
          : json["estimated_spend"],
      exact: decodeBoolean(json["exact"], path, "exact"),
      id: decodeString(json["id"], path, "id"),
      period:
        json["period"] != null
          ? BudgetPeriodSerializer.parse(json["period"], decodePath(path, "period"))
          : json["period"],
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      thresholds: decodeList(
        json["thresholds"],
        path,
        "thresholds",
        (item: any, p: string, i: number) => decodeInteger(item, p, i)
      ),
      updatedAt: decodeDateTime(json["updated_at"], path, "updated_at"),
      version: decodeInteger(json["version"], path, "version"),
    };
  },

  serialize(value: Budget): any {
    return {
      ...extraProperties(value, [
        "amount",
        "archivedAt",
        "asOf",
        "behavior",
        "createdAt",
        "createdBy",
        "creditUnit",
        "creditUnitPrecision",
        "currency",
        "estimatedSpend",
        "exact",
        "id",
        "period",
        "subscriptionId",
        "thresholds",
        "updatedAt",
        "version",
      ]),
      amount: value.amount,
      archived_at: value.archivedAt,
      as_of: value.asOf,
      behavior: BudgetBehaviorSerializer.serialize(value.behavior),
      created_at: value.createdAt,
      created_by: BudgetAuthorSerializer.serialize(value.createdBy),
      credit_unit: value.creditUnit,
      credit_unit_precision: value.creditUnitPrecision,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      estimated_spend: value.estimatedSpend,
      exact: value.exact,
      id: value.id,
      period:
        value.period != null
          ? BudgetPeriodSerializer.serialize(value.period)
          : value.period,
      subscription_id: value.subscriptionId,
      thresholds: value.thresholds,
      updated_at: value.updatedAt,
      version: value.version,
    };
  },
};
