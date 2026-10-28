// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";
/** A boolean config value. */
export interface BooleanConfigValue {
  kind: "BOOLEAN";
  value: boolean;
}

/** Converts `BooleanConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanConfigValueSerializer = {
  parse(json: any, path = "$"): BooleanConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["kind", "value"]),
      kind:
        json["kind"] != null
          ? (decodeString(json["kind"], path, "kind") as "BOOLEAN")
          : "BOOLEAN",
      value: decodeBoolean(json["value"], path, "value"),
    };
  },

  serialize(value: BooleanConfigValue): any {
    return {
      ...extraProperties(value, ["kind", "value"]),
      kind: value.kind ?? "BOOLEAN",
      value: value.value,
    };
  },
};
