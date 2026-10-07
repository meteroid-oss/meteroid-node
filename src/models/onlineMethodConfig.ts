// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject } from "../decode.js";

export interface OnlineMethodConfig {
  enabled: boolean;
}

/** Converts `OnlineMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const OnlineMethodConfigSerializer = {
  parse(json: any, path = "$"): OnlineMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["enabled"]),
      enabled: decodeBoolean(json["enabled"], path, "enabled"),
    };
  },

  serialize(value: OnlineMethodConfig): any {
    return {
      ...extraProperties(value, ["enabled"]),
      enabled: value.enabled,
    };
  },
};
