// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface PercentageDiscount {
  percentage: string;
}

/** Converts `PercentageDiscount` values from (`parse`) and to (`serialize`) their JSON form. */
export const PercentageDiscountSerializer = {
  parse(json: any, path = "$"): PercentageDiscount {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["percentage"]),
      percentage: decodeString(json["percentage"], path, "percentage"),
    };
  },

  serialize(value: PercentageDiscount): any {
    return {
      ...extraProperties(value, ["percentage"]),
      percentage: value.percentage,
    };
  },
};
