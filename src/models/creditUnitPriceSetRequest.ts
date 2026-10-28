// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** The new price of one credit in a currency. */
export interface CreditUnitPriceSetRequest {
  /**
   * Major units of the currency per credit, as a decimal string: positive, at most 12 decimal
   * places.
   */
  unitPrice: string;
}

/** Converts `CreditUnitPriceSetRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditUnitPriceSetRequestSerializer = {
  parse(json: any, path = "$"): CreditUnitPriceSetRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["unit_price"]),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: CreditUnitPriceSetRequest): any {
    return {
      ...extraProperties(value, ["unitPrice"]),
      unit_price: value.unitPrice,
    };
  },
};
