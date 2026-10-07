// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";

export interface BooleanEffectiveEntitlementValue {
  enabled: boolean;
}

/** Converts `BooleanEffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanEffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanEffectiveEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["enabled"]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
    };
  },

  serialize(value: BooleanEffectiveEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled"]),
      enabled: value.enabled,
    };
  },
};
