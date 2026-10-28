// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import { type TermRate, TermRateSerializer } from "./termRate.js";
/** Recurring rate fee (e.g., monthly subscription) */
export interface RatePlanFee {
  rates: TermRate[];
  type: "RATE";
}

/** Converts `RatePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const RatePlanFeeSerializer = {
  parse(json: any, path = "$"): RatePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rates", "type"]),
      rates: decodeList(json["rates"], path, "rates", (item: any, p: string, i: number) =>
        TermRateSerializer.parse(item, decodePath(p, i))
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "RATE")
          : "RATE",
    };
  },

  serialize(value: RatePlanFee): any {
    return {
      ...extraProperties(value, ["rates", "type"]),
      rates: value.rates.map((item: any) => TermRateSerializer.serialize(item)),
      type: value.type ?? "RATE",
    };
  },
};
