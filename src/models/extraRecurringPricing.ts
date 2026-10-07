// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface ExtraRecurringPricing {
  quantity: number;
  unitPrice: string;
}

/** Converts `ExtraRecurringPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringPricingSerializer = {
  parse(json: any, path = "$"): ExtraRecurringPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "unit_price"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: ExtraRecurringPricing): any {
    return {
      ...extraProperties(value, ["quantity", "unitPrice"]),
      quantity: value.quantity,
      unit_price: value.unitPrice,
    };
  },
};
