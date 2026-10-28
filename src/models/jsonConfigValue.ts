// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** A structured (JSON) config value — the "metadata" case, several fields in one entitlement. */
export interface JsonConfigValue {
  kind: "JSON";
  value: unknown;
}

/** Converts `JsonConfigValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const JsonConfigValueSerializer = {
  parse(json: any, path = "$"): JsonConfigValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["kind", "value"]),
      kind:
        json["kind"] != null
          ? (decodeString(json["kind"], path, "kind") as "JSON")
          : "JSON",
      value: json["value"],
    };
  },

  serialize(value: JsonConfigValue): any {
    return {
      ...extraProperties(value, ["kind", "value"]),
      kind: value.kind ?? "JSON",
      value: value.value,
    };
  },
};
