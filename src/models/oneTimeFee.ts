// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface OneTimeFee {
  quantity: number;
  rate: string;
  type: "ONE_TIME";
}

/** Converts `OneTimeFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const OneTimeFeeSerializer = {
  parse(json: any, path = "$"): OneTimeFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["quantity", "rate", "type"]),
      quantity: decodeInteger(json["quantity"], path, "quantity"),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "ONE_TIME")
          : "ONE_TIME",
    };
  },

  serialize(value: OneTimeFee): any {
    return {
      ...extraProperties(value, ["quantity", "rate", "type"]),
      quantity: value.quantity,
      rate: value.rate,
      type: value.type ?? "ONE_TIME",
    };
  },
};
