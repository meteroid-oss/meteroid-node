// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type TierRow, TierRowSerializer } from "./tierRow.js";

export interface VolumePlanPricing {
  blockSize?: number | null | undefined;
  tiers: TierRow[];
  type: "VOLUME";
}

/** Converts `VolumePlanPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const VolumePlanPricingSerializer = {
  parse(json: any, path = "$"): VolumePlanPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["block_size", "tiers", "type"]),
      blockSize:
        json["block_size"] != null
          ? decodeInteger(json["block_size"], path, "block_size")
          : json["block_size"],
      tiers: decodeList(json["tiers"], path, "tiers", (item: any, p: string, i: number) =>
        TierRowSerializer.parse(item, decodePath(p, i))
      ),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "VOLUME")
          : "VOLUME",
    };
  },

  serialize(value: VolumePlanPricing): any {
    return {
      ...extraProperties(value, ["blockSize", "tiers", "type"]),
      block_size: value.blockSize,
      tiers: value.tiers.map((item: any) => TierRowSerializer.serialize(item)),
      type: value.type ?? "VOLUME",
    };
  },
};
