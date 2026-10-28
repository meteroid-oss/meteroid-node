// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface RateFee {
  rate: string;
  type: "RATE";
}

/** Converts `RateFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const RateFeeSerializer = {
  parse(json: any, path = "$"): RateFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rate", "type"]),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "RATE")
          : "RATE",
    };
  },

  serialize(value: RateFee): any {
    return {
      ...extraProperties(value, ["rate", "type"]),
      rate: value.rate,
      type: value.type ?? "RATE",
    };
  },
};
