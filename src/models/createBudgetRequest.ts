// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type BudgetBehavior, BudgetBehaviorSerializer } from "./budgetBehavior.js";
import { type Currency, CurrencySerializer } from "./currency.js";

export interface CreateBudgetRequest {
  /** In minor units of the currency or credit unit. */
  amount: number;
  behavior?: BudgetBehavior | null | undefined;
  /**
   * A credit unit (its code): the budget counts the usage priced in that unit, in its minor
   * units.
   */
  creditUnit?: string | null | undefined;
  currency?: Currency | null | undefined;
  /**
   * An active subscription of the customer (`sub_…`): the budget then counts only that
   * subscription's spend, in its currency. Absent counts the whole customer's.
   */
  subscriptionId?: string | null | undefined;
  /** Percentages of the amount (1 to 100, at most 10). Defaults to 50, 80 and 100. */
  thresholds?: number[] | null | undefined;
}

/** Converts `CreateBudgetRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateBudgetRequestSerializer = {
  parse(json: any, path = "$"): CreateBudgetRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "amount",
        "behavior",
        "credit_unit",
        "currency",
        "subscription_id",
        "thresholds",
      ]),
      amount: decodeInteger(json["amount"], path, "amount"),
      behavior:
        json["behavior"] != null
          ? BudgetBehaviorSerializer.parse(json["behavior"], decodePath(path, "behavior"))
          : json["behavior"],
      creditUnit:
        json["credit_unit"] != null
          ? decodeString(json["credit_unit"], path, "credit_unit")
          : json["credit_unit"],
      currency:
        json["currency"] != null
          ? CurrencySerializer.parse(json["currency"], decodePath(path, "currency"))
          : json["currency"],
      subscriptionId:
        json["subscription_id"] != null
          ? decodeString(json["subscription_id"], path, "subscription_id")
          : json["subscription_id"],
      thresholds:
        json["thresholds"] != null
          ? decodeList(
              json["thresholds"],
              path,
              "thresholds",
              (item: any, p: string, i: number) => decodeInteger(item, p, i)
            )
          : json["thresholds"],
    };
  },

  serialize(value: CreateBudgetRequest): any {
    return {
      ...extraProperties(value, [
        "amount",
        "behavior",
        "creditUnit",
        "currency",
        "subscriptionId",
        "thresholds",
      ]),
      amount: value.amount,
      behavior:
        value.behavior != null
          ? BudgetBehaviorSerializer.serialize(value.behavior)
          : value.behavior,
      credit_unit: value.creditUnit,
      currency:
        value.currency != null
          ? CurrencySerializer.serialize(value.currency)
          : value.currency,
      subscription_id: value.subscriptionId,
      thresholds: value.thresholds,
    };
  },
};
