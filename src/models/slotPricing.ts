// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface SlotPricing {
  maxSlots?: number | null | undefined;
  minSlots?: number | null | undefined;
  type: "SLOT";
  unitRate: string;
}

/** Converts `SlotPricing` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotPricingSerializer = {
  parse(json: any, path = "$"): SlotPricing {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["max_slots", "min_slots", "type", "unit_rate"]),
      maxSlots:
        json["max_slots"] != null
          ? decodeInteger(json["max_slots"], path, "max_slots")
          : json["max_slots"],
      minSlots:
        json["min_slots"] != null
          ? decodeInteger(json["min_slots"], path, "min_slots")
          : json["min_slots"],
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "SLOT")
          : "SLOT",
      unitRate: decodeString(json["unit_rate"], path, "unit_rate"),
    };
  },

  serialize(value: SlotPricing): any {
    return {
      ...extraProperties(value, ["maxSlots", "minSlots", "type", "unitRate"]),
      max_slots: value.maxSlots,
      min_slots: value.minSlots,
      type: value.type ?? "SLOT",
      unit_rate: value.unitRate,
    };
  },
};
