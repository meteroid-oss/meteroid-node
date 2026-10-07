// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodePath } from "../decode.js";
import {
  type OnlineMethodConfig,
  OnlineMethodConfigSerializer,
} from "./onlineMethodConfig.js";

export interface OnlineMethodsConfig {
  card?: OnlineMethodConfig | null | undefined;
  directDebit?: OnlineMethodConfig | null | undefined;
}

/** Converts `OnlineMethodsConfig` values from (`parse`) and to (`serialize`) their JSON form. */
export const OnlineMethodsConfigSerializer = {
  parse(json: any, path = "$"): OnlineMethodsConfig {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["card", "direct_debit"]),
      card:
        json["card"] != null
          ? OnlineMethodConfigSerializer.parse(json["card"], decodePath(path, "card"))
          : json["card"],
      directDebit:
        json["direct_debit"] != null
          ? OnlineMethodConfigSerializer.parse(
              json["direct_debit"],
              decodePath(path, "direct_debit")
            )
          : json["direct_debit"],
    };
  },

  serialize(value: OnlineMethodsConfig): any {
    return {
      ...extraProperties(value, ["card", "directDebit"]),
      card:
        value.card != null
          ? OnlineMethodConfigSerializer.serialize(value.card)
          : value.card,
      direct_debit:
        value.directDebit != null
          ? OnlineMethodConfigSerializer.serialize(value.directDebit)
          : value.directDebit,
    };
  },
};
