// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type OnlineMethodsConfig,
  OnlineMethodsConfigSerializer,
} from "./onlineMethodsConfig.js";

export interface OnlinePaymentMethodConfig {
  config?: OnlineMethodsConfig | null | undefined;
  type: "online";
}

/** Converts `OnlinePaymentMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const OnlinePaymentMethodConfigSerializer = {
  parse(json: any, path = "$"): OnlinePaymentMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["config", "type"]),
      config:
        json["config"] != null
          ? OnlineMethodsConfigSerializer.parse(
              json["config"],
              decodePath(path, "config")
            )
          : json["config"],
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "online")
          : "online",
    };
  },

  serialize(value: OnlinePaymentMethodConfig): any {
    return {
      ...extraProperties(value, ["config", "type"]),
      config:
        value.config != null
          ? OnlineMethodsConfigSerializer.serialize(value.config)
          : value.config,
      type: value.type ?? "online",
    };
  },
};
