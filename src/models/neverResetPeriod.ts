// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
/** Never resets — counts all usage since the subscription was activated. */
export interface NeverResetPeriod {
  type: "NEVER";
}

/** Converts `NeverResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const NeverResetPeriodSerializer = {
  parse(json: any, path = "$"): NeverResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "NEVER")
          : "NEVER",
    };
  },

  serialize(value: NeverResetPeriod): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "NEVER",
    };
  },
};
