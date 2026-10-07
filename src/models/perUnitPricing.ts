// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface PerUnitPricing {
  rate: string;
}

/** Converts `PerUnitPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const PerUnitPricingSerializer = {
  parse(json: any, path = "$"): PerUnitPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rate"]),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: PerUnitPricing): any {
    return {
      ...extraProperties(value, ["rate"]),
      rate: value.rate,
    };
  },
};
