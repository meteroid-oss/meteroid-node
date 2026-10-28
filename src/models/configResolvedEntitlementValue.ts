// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import { type ConfigValue, ConfigValueSerializer } from "./configValue.js";

export interface ConfigResolvedEntitlementValue {
  type: "CONFIG";
  value: ConfigValue;
}

/** Converts `ConfigResolvedEntitlementValue` values from (`parse`) and to (`serialize`) their JSON form. */
export const ConfigResolvedEntitlementValueSerializer = {
  parse(json: any, path = "$"): ConfigResolvedEntitlementValue {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type", "value"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CONFIG")
          : "CONFIG",
      value: ConfigValueSerializer.parse(json["value"], decodePath(path, "value")),
    };
  },

  serialize(value: ConfigResolvedEntitlementValue): any {
    return {
      ...extraProperties(value, ["type", "value"]),
      type: value.type ?? "CONFIG",
      value: ConfigValueSerializer.serialize(value.value),
    };
  },
};
