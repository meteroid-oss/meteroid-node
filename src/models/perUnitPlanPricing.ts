// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface PerUnitPlanPricing {
  rate: string;
  type: "PER_UNIT";
}

/** Converts `PerUnitPlanPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const PerUnitPlanPricingSerializer = {
  parse(json: any, path = "$"): PerUnitPlanPricing {
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

  serialize(value: PerUnitPlanPricing): any {
    return {
      ...extraProperties(value, ["rate", "type"]),
      rate: value.rate,
      type: value.type ?? "PER_UNIT",
    };
  },
};
