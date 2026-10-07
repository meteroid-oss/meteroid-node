// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface RatePricing {
  rate: string;
}

/** Converts `RatePricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const RatePricingSerializer = {
  parse(json: any, path = "$"): RatePricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rate"]),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: RatePricing): any {
    return {
      ...extraProperties(value, ["rate"]),
      rate: value.rate,
    };
  },
};
