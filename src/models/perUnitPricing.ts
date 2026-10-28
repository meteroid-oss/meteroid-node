// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface PerUnitPricing {
  rate: string;
  type: "PER_UNIT";
}

/** Converts `PerUnitPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const PerUnitPricingSerializer = {
  parse(json: any, path = "$"): PerUnitPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rate", "type"]),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "PER_UNIT")
          : "PER_UNIT",
    };
  },

  serialize(value: PerUnitPricing): any {
    return {
      ...extraProperties(value, ["rate", "type"]),
      rate: value.rate,
      type: value.type ?? "PER_UNIT",
    };
  },
};
