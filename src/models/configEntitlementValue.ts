// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import { type ConfigValue, ConfigValueSerializer } from "./configValue.js";

export interface ConfigEntitlementValue {
  value: ConfigValue;
}

/** Converts `ConfigEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConfigEntitlementValueSerializer = {
  parse(json: any, path = "$"): ConfigEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["value"]),
      value: ConfigValueSerializer.parse(json["value"], decodePath(path, "value")),
    };
  },

  serialize(value: ConfigEntitlementValue): any {
    return {
      ...extraProperties(value, ["value"]),
      value: ConfigValueSerializer.serialize(value.value),
    };
  },
};
