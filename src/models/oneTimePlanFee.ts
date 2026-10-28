// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";
/** One-time fee */
export interface OneTimePlanFee {
  quantity: number;
  type: "ONE_TIME";
  unitPrice: string;
}

/** Converts `OneTimePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimePlanFeeSerializer = {
  parse(json: any, path = "$"): OneTimePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "type", "unit_price"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "ONE_TIME")
          : "ONE_TIME",
      unitPrice: decodeString(json["unit_price"], path, "unit_price"),
    };
  },

  serialize(value: OneTimePlanFee): any {
    return {
      ...extraProperties(value, ["quantity", "type", "unitPrice"]),
      quantity: value.quantity,
      type: value.type ?? "ONE_TIME",
      unit_price: value.unitPrice,
    };
  },
};
