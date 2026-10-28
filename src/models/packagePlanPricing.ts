// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface PackagePlanPricing {
  blockSize: number;
  rate: string;
  type: "PACKAGE";
}

/** Converts `PackagePlanPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const PackagePlanPricingSerializer = {
  parse(json: any, path = "$"): PackagePlanPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["block_size", "rate", "type"]),
      blockSize: decodeInteger(json["block_size"], path, "block_size"),
      rate: decodeString(json["rate"], path, "rate"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "PACKAGE")
          : "PACKAGE",
    };
  },

  serialize(value: PackagePlanPricing): any {
    return {
      ...extraProperties(value, ["blockSize", "rate", "type"]),
      block_size: value.blockSize,
      rate: value.rate,
      type: value.type ?? "PACKAGE",
    };
  },
};
