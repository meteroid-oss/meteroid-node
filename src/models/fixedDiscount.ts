// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface FixedDiscount {
  amount: string;
  currency: string;
  type: "FIXED";
}

/** Converts `FixedDiscount` values from (`parse`) and to (`serialize`) their JSON form. */
export const FixedDiscountSerializer = {
  parse(json: any, path = "$"): FixedDiscount {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "currency", "type"]),
      amount: decodeString(json["amount"], path, "amount"),
      currency: decodeString(json["currency"], path, "currency"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "FIXED")
          : "FIXED",
    };
  },

  serialize(value: FixedDiscount): any {
    return {
      ...extraProperties(value, ["amount", "currency", "type"]),
      amount: value.amount,
      currency: value.currency,
      type: value.type ?? "FIXED",
    };
  },
};
