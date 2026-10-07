// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath } from "../decode.js";
import { type TermRate, TermRateSerializer } from "./termRate.js";
/** Recurring rate fee (e.g., monthly subscription) */
export interface RatePlanFee {
  rates: TermRate[];
}

/** Converts `RatePlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const RatePlanFeeSerializer = {
  parse(json: any, path = "$"): RatePlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["rates"]),
      rates: decodeList(json["rates"], path, "rates", (item: any, p: string, i: number) =>
        TermRateSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: RatePlanFee): any {
    return {
      ...extraProperties(value, ["rates"]),
      rates: value.rates.map((item: any) => TermRateSerializer.serialize(item)),
    };
  },
};
