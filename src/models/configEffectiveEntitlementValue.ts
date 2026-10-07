// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type ConfigValue, ConfigValueSerializer } from "./configValue.js";

export interface ConfigEffectiveEntitlementValue {
  value: ConfigValue;
}

/** Converts `ConfigEffectiveEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConfigEffectiveEntitlementValueSerializer = {
  parse(json: any, path = "$"): ConfigEffectiveEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["value"]),
      value: ConfigValueSerializer.parse(json["value"], decodePath(path, "value")),
    };
  },

  serialize(value: ConfigEffectiveEntitlementValue): any {
    return {
      ...extraProperties(value, ["value"]),
      value: ConfigValueSerializer.serialize(value.value),
    };
  },
};
