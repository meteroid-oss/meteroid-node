// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import {
  type OnlineMethodsConfig,
  OnlineMethodsConfigSerializer,
} from "./onlineMethodsConfig.js";

export interface OnlinePaymentMethodConfig {
  config?: OnlineMethodsConfig | null | undefined;
}

/** Converts `OnlinePaymentMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const OnlinePaymentMethodConfigSerializer = {
  parse(json: any, path = "$"): OnlinePaymentMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["config"]),
      config:
        json["config"] != null
          ? OnlineMethodsConfigSerializer.parse(
              json["config"],
              decodePath(path, "config")
            )
          : json["config"],
    };
  },

  serialize(value: OnlinePaymentMethodConfig): any {
    return {
      ...extraProperties(value, ["config"]),
      config:
        value.config != null
          ? OnlineMethodsConfigSerializer.serialize(value.config)
          : value.config,
    };
  },
};
