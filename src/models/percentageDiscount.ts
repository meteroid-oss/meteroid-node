// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface PercentageDiscount {
  percentage: string;
  type: "PERCENTAGE";
}

/** Converts `PercentageDiscount` values from (`parse`) and to (`serialize`) their JSON form. */
export const PercentageDiscountSerializer = {
  parse(json: any, path = "$"): PercentageDiscount {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["percentage", "type"]),
      percentage: decodeString(json["percentage"], path, "percentage"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "PERCENTAGE")
          : "PERCENTAGE",
    };
  },

  serialize(value: PercentageDiscount): any {
    return {
      ...extraProperties(value, ["percentage", "type"]),
      percentage: value.percentage,
      type: value.type ?? "PERCENTAGE",
    };
  },
};
