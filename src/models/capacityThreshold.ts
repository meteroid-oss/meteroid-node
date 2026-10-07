// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface CapacityThreshold {
  includedAmount: number;
  perUnitOverage: string;
  price: string;
}

/** Converts `CapacityThreshold` values from (`parse`) and to (`serialize`) their JSON form. */
export const CapacityThresholdSerializer = {
  parse(json: any, path = "$"): CapacityThreshold {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["included_amount", "per_unit_overage", "price"]),
      includedAmount: decodeInteger(json["included_amount"], path, "included_amount"),
      perUnitOverage: decodeString(json["per_unit_overage"], path, "per_unit_overage"),
      price: decodeString(json["price"], path, "price"),
    };
  },

  serialize(value: CapacityThreshold): any {
    return {
      ...extraProperties(value, ["includedAmount", "perUnitOverage", "price"]),
      included_amount: value.includedAmount,
      per_unit_overage: value.perUnitOverage,
      price: value.price,
    };
  },
};
