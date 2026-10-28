// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath } from "../decode.js";
import {
  type UnitConversionRoundingEnum,
  UnitConversionRoundingEnumSerializer,
} from "./unitConversionRoundingEnum.js";
/**
 * Converts the aggregated usage into the unit prices are set in, e.g. tokens priced per 1M.
 * The usage is divided by `factor`, then rounded. Rounding applies to each priced group's
 * total for the billing period: each group of a segmented or grouped metric, and each matrix
 * cell, is rounded on its own, never each event.
 */
export interface UnitConversion {
  /** Raw units per priced unit, e.g. `1000000` to price per 1M. */
  factor: number;
  rounding: UnitConversionRoundingEnum;
}

/** Converts `UnitConversion` values from (`parse`) and to (`serialize`) their JSON form. */
export const UnitConversionSerializer = {
  parse(json: any, path = "$"): UnitConversion {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["factor", "rounding"]),
      factor: decodeInteger(json["factor"], path, "factor"),
      rounding: UnitConversionRoundingEnumSerializer.parse(
        json["rounding"],
        decodePath(path, "rounding")
      ),
    };
  },

  serialize(value: UnitConversion): any {
    return {
      ...extraProperties(value, ["factor", "rounding"]),
      factor: value.factor,
      rounding: UnitConversionRoundingEnumSerializer.serialize(value.rounding),
    };
  },
};
