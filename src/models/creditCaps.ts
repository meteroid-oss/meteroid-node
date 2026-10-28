// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CreditCap, CreditCapSerializer } from "./creditCap.js";

export interface CreditCaps {
  /** One per denomination; usage charged in a denomination without a cap pauses at zero. */
  caps: CreditCap[];
  type: "invoice_up_to";
}

/** Converts `CreditCaps` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditCapsSerializer = {
  parse(json: any, path = "$"): CreditCaps {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["caps", "type"]),
      caps: decodeList(json["caps"], path, "caps", (item: any, p: string, i: number) =>
        CreditCapSerializer.parse(item, decodePath(p, i))
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "invoice_up_to")
          : "invoice_up_to",
    };
  },

  serialize(value: CreditCaps): any {
    return {
      ...extraProperties(value, ["caps", "type"]),
      caps: value.caps.map((item: any) => CreditCapSerializer.serialize(item)),
      type: value.type ?? "invoice_up_to",
    };
  },
};
