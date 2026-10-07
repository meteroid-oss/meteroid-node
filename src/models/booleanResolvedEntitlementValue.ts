// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";

export interface BooleanResolvedEntitlementValue {
  enabled: boolean;
}

/** Converts `BooleanResolvedEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanResolvedEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanResolvedEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["enabled"]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
    };
  },

  serialize(value: BooleanResolvedEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled"]),
      enabled: value.enabled,
    };
  },
};
