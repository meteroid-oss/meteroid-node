// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** A number config value (decimal, encoded as a string). */
export interface NumberConfigValue {
  kind: "NUMBER";
  value: string;
}

/** Converts `NumberConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const NumberConfigValueSerializer = {
  parse(json: any, path = "$"): NumberConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["kind", "value"]),
      kind:
        json["kind"] != null
          ? (decodeString(json["kind"], path, "kind") as "NUMBER")
          : "NUMBER",
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: NumberConfigValue): any {
    return {
      ...extraProperties(value, ["kind", "value"]),
      kind: value.kind ?? "NUMBER",
      value: value.value,
    };
  },
};
