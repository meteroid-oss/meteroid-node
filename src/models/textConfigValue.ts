// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** A text config value. */
export interface TextConfigValue {
  kind: "TEXT";
  value: string;
}

/** Converts `TextConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const TextConfigValueSerializer = {
  parse(json: any, path = "$"): TextConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["kind", "value"]),
      kind:
        json["kind"] != null
          ? (decodeString(json["kind"], path, "kind") as "TEXT")
          : "TEXT",
      value: decodeString(json["value"], path, "value"),
    };
  },

  serialize(value: TextConfigValue): any {
    return {
      ...extraProperties(value, ["kind", "value"]),
      kind: value.kind ?? "TEXT",
      value: value.value,
    };
  },
};
