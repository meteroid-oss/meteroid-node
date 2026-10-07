// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** A text config value. */
export interface TextConfigValue {
  value: string;
}

/** Converts `TextConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const TextConfigValueSerializer = {
  parse(json: any, path = "$"): TextConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["value"]),
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: TextConfigValue): any {
    return {
      ...extraProperties(value, ["value"]),
      value: value.value,
    };
  },
};
