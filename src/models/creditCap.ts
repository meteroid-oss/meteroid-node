// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface CreditCap {
  /** Usage beyond the credit invoiced per billing period, in minor units of `denomination`. */
  amount: number;
  /** A currency or credit unit code. */
  denomination: string;
}

/** Converts `CreditCap` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditCapSerializer = {
  parse(json: any, path = "$"): CreditCap {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["amount", "denomination"]),
      amount: decodeInteger(json["amount"], path, "amount"),
      denomination: decodeString(json["denomination"], path, "denomination"),
    };
  },

  serialize(value: CreditCap): any {
    return {
      ...extraProperties(value, ["amount", "denomination"]),
      amount: value.amount,
      denomination: value.denomination,
    };
  },
};
