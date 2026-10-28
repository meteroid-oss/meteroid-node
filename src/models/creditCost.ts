// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath } from "../decode.js";
import { type Currency, CurrencySerializer } from "./currency.js";
/** Money in minor units of `currency`, net of tax. */
export interface CreditCost {
  /** In minor units of `currency`. */
  amount: number;
  currency: Currency;
}

/** Converts `CreditCost` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditCostSerializer = {
  parse(json: any, path = "$"): CreditCost {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "currency"]),
      amount: decodeInteger(json["amount"], path, "amount"),
      currency: CurrencySerializer.parse(json["currency"], decodePath(path, "currency")),
    };
  },

  serialize(value: CreditCost): any {
    return {
      ...extraProperties(value, ["amount", "currency"]),
      amount: value.amount,
      currency: CurrencySerializer.serialize(value.currency),
    };
  },
};
