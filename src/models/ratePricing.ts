// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface RatePricing {
  rate: string;
  type: "RATE";
}

/** Converts `RatePricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const RatePricingSerializer = {
  parse(json: any, path = "$"): RatePricing {
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

  serialize(value: RatePricing): any {
    return {
      ...extraProperties(value, ["rate", "type"]),
      rate: value.rate,
      type: value.type ?? "RATE",
    };
  },
};
