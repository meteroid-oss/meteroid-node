// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject } from "../decode.js";

export interface ExternalPaymentMethodConfig {}

/** Converts `ExternalPaymentMethodConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const ExternalPaymentMethodConfigSerializer = {
  parse(json: any, path = "$"): ExternalPaymentMethodConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, []),
    };
  },

  serialize(value: ExternalPaymentMethodConfig): any {
    return {
      ...extraProperties(value, []),
    };
  },
};
