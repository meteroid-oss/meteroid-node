// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Access checks refuse usage once the credit the subscription can spend is used up. */
export interface CreditExhaustedRulePauseVariant {
  type: "pause";
}

/** Converts `CreditExhaustedRulePauseVariant` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditExhaustedRulePauseVariantSerializer = {
  parse(json: any, path = "$"): CreditExhaustedRulePauseVariant {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "pause")
          : "pause",
    };
  },

  serialize(value: CreditExhaustedRulePauseVariant): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "pause",
    };
  },
};
