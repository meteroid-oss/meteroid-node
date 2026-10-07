// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface OneTimePricing {
  quantity: number;
  unitPrice: string;
}

/** Converts `OneTimePricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimePricingSerializer = {
  parse(json: any, path = "$"): OneTimePricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "unit_price"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: OneTimePricing): any {
    return {
      ...extraProperties(value, ["quantity", "unitPrice"]),
      quantity: value.quantity,
      unit_price: value.unitPrice,
    };
  },
};
