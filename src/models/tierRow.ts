// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface TierRow {
  firstUnit: number;
  flatCap?: string | null | undefined;
  flatFee?: string | null | undefined;
  rate: string;
}

/** Converts `TierRow` values from (`parse`) and to (`serialize`) their JSON form. */
export const TierRowSerializer = {
  parse(json: any, path = "$"): TierRow {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["first_unit", "flat_cap", "flat_fee", "rate"]),
      firstUnit: decodeInteger(json["first_unit"], path, "first_unit"),
      flatCap:
        json["flat_cap"] != null
          ? decodeString(json["flat_cap"], path, "flat_cap")
          : json["flat_cap"],
      flatFee:
        json["flat_fee"] != null
          ? decodeString(json["flat_fee"], path, "flat_fee")
          : json["flat_fee"],
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: TierRow): any {
    return {
      ...extraProperties(value, ["firstUnit", "flatCap", "flatFee", "rate"]),
      first_unit: value.firstUnit,
      flat_cap: value.flatCap,
      flat_fee: value.flatFee,
      rate: value.rate,
    };
  },
};
