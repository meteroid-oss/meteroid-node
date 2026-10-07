// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";

export interface BooleanEntitlementValue {
  enabled: boolean;
}

/** Converts `BooleanEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const BooleanEntitlementValueSerializer = {
  parse(json: any, path = "$"): BooleanEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["enabled"]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
    };
  },

  serialize(value: BooleanEntitlementValue): any {
    return {
      ...extraProperties(value, ["enabled"]),
      enabled: value.enabled,
    };
  },
};
