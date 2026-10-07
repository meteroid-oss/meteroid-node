// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** One-time fee */
export interface OneTimePlanFee {
  quantity: number;
  unitPrice: string;
}

/** Converts `OneTimePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimePlanFeeSerializer = {
  parse(json: any, path = "$"): OneTimePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "unit_price"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: OneTimePlanFee): any {
    return {
      ...extraProperties(value, ["quantity", "unitPrice"]),
      quantity: value.quantity,
      unit_price: value.unitPrice,
    };
  },
};
