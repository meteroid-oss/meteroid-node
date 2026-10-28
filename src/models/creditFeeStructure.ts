// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface CreditFeeStructure {
  type: "CREDIT";
}

/** Converts `CreditFeeStructure` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditFeeStructureSerializer = {
  parse(json: any, path = "$"): CreditFeeStructure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["type"]),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CREDIT")
          : "CREDIT",
    };
  },

  serialize(value: CreditFeeStructure): any {
    return {
      ...extraProperties(value, ["type"]),
      type: value.type ?? "CREDIT",
    };
  },
};
