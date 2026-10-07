// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath } from "../decode.js";
import {
  type UnitConversionRoundingEnum,
  UnitConversionRoundingEnumSerializer,
} from "./unitConversionRoundingEnum.js";

export interface UnitConversion {
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
