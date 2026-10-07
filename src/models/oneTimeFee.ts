// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface OneTimeFee {
  quantity: number;
  rate: string;
}

/** Converts `OneTimeFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimeFeeSerializer = {
  parse(json: any, path = "$"): OneTimeFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "rate"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: OneTimeFee): any {
    return {
      ...extraProperties(value, ["quantity", "rate"]),
      quantity: value.quantity,
      rate: value.rate,
    };
  },
};
