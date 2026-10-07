// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";
/** A boolean config value. */
export interface BooleanConfigValue {
  value: boolean;
}

/** Converts `BooleanConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanConfigValueSerializer = {
  parse(json: any, path = "$"): BooleanConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["value"]),
      value: decodeBoolean(json["value"], path, "value"),
    };
  },

  serialize(value: BooleanConfigValue): any {
    return {
      ...extraProperties(value, ["value"]),
      value: value.value,
    };
  },
};
