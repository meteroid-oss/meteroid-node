// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodeString } from "../decode.js";

export interface BooleanEntitlementValue {
  enabled: boolean;
  type: "BOOLEAN";
}

/** Converts `BooleanEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanEntitlementValue {
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

  serialize(value: BooleanEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled", "type"]),
      enabled: value.enabled,
      type: value.type ?? "BOOLEAN",
    };
  },
};
