// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";

export interface BooleanEffectiveEntitlementValue {
  enabled: boolean;
  type: "BOOLEAN";
}

/** Converts `BooleanEffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanEffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanEffectiveEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["enabled", "type"]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "BOOLEAN")
          : "BOOLEAN",
    };
  },

  serialize(value: BooleanEffectiveEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled", "type"]),
      enabled: value.enabled,
      type: value.type ?? "BOOLEAN",
    };
  },
};
