// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type UsageCostUnit, UsageCostUnitSerializer } from "./usageCostUnit.js";
/**
 * Usage priced as its invoice line prices it, before discounts and credits: tax-inclusive when
 * the subscription's prices are.
 */
export interface UsageCost {
  amount: string;
  /** A currency code, or a credit unit code when `unit` is `CREDIT_UNIT`. */
  currency: string;
  unit: UsageCostUnit;
}

/** Converts `UsageCost` values from (`parse`) and to (`serialize`) their JSON form. */
export const UsageCostSerializer = {
  parse(json: any, path = "$"): UsageCost {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "currency", "unit"]),
      amount: decodeString(json["amount"], path, "amount"),
      currency: decodeString(json["currency"], path, "currency"),
      unit: UsageCostUnitSerializer.parse(json["unit"], decodePath(path, "unit")),
    };
  },

  serialize(value: UsageCost): any {
    return {
      ...extraProperties(value, ["amount", "currency", "unit"]),
      amount: value.amount,
      currency: value.currency,
      unit: UsageCostUnitSerializer.serialize(value.unit),
    };
  },
};
