// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";

export interface BooleanResolvedEntitlementValue {
  enabled: boolean;
  type: "BOOLEAN";
}

/** Converts `BooleanResolvedEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanResolvedEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanResolvedEntitlementValue {
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

  serialize(value: BooleanResolvedEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled", "type"]),
      enabled: value.enabled,
      type: value.type ?? "BOOLEAN",
    };
  },
};
