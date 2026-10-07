// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeList, decodeObject, decodePath } from "../decode.js";
import { type TierRow, TierRowSerializer } from "./tierRow.js";

export interface TieredPlanPricing {
  blockSize?: number | null | undefined;
  tiers: TierRow[];
}

/** Converts `TieredPlanPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const TieredPlanPricingSerializer = {
  parse(json: any, path = "$"): TieredPlanPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["block_size", "tiers"]),
      blockSize:
        json["block_size"] != null
          ? decodeInteger(json["block_size"], path, "block_size")
          : json["block_size"],
      tiers: decodeList(json["tiers"], path, "tiers", (item: any, p: string, i: number) =>
        TierRowSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: TieredPlanPricing): any {
    return {
      ...extraProperties(value, ["blockSize", "tiers"]),
      block_size: value.blockSize,
      tiers: value.tiers.map((item: any) => TierRowSerializer.serialize(item)),
    };
  },
};
