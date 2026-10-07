// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface PackagePricing {
  blockSize: number;
  rate: string;
}

/** Converts `PackagePricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const PackagePricingSerializer = {
  parse(json: any, path = "$"): PackagePricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["block_size", "rate"]),
      blockSize: decodeInteger(json["block_size"], path, "block_size"),
      rate: decodeString(json["rate"], path, "rate"),
    };
  },

  serialize(value: PackagePricing): any {
    return {
      ...extraProperties(value, ["blockSize", "rate"]),
      block_size: value.blockSize,
      rate: value.rate,
    };
  },
};
