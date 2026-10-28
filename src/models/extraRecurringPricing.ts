// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface ExtraRecurringPricing {
  quantity: number;
  type: "EXTRA_RECURRING";
  unitPrice: string;
}

/** Converts `ExtraRecurringPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExtraRecurringPricingSerializer = {
  parse(json: any, path = "$"): ExtraRecurringPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "type", "unit_price"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "EXTRA_RECURRING")
          : "EXTRA_RECURRING",
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: ExtraRecurringPricing): any {
    return {
      ...extraProperties(value, ["quantity", "type", "unitPrice"]),
      quantity: value.quantity,
      type: value.type ?? "EXTRA_RECURRING",
      unit_price: value.unitPrice,
    };
  },
};
