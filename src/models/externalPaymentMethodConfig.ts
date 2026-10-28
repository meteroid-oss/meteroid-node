// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface ExternalPaymentMethodConfig {
  type: "external";
}

/** Converts `ExternalPaymentMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExternalPaymentMethodConfigSerializer = {
  parse(json: any, path = "$"): ExternalPaymentMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "external")
          : "external",
    };
  },

  serialize(value: ExternalPaymentMethodConfig): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "external",
    };
  },
};
