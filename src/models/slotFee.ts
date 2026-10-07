// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodeString } from "../decode.js";

export interface SlotFee {
  initialSlots: number;
  maxSlots?: number | null | undefined;
  minSlots?: number | null | undefined;
  unit: string;
  unitRate: string;
}

/** Converts `SlotFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotFeeSerializer = {
  parse(json: any, path = "$"): SlotFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "initial_slots",
        "max_slots",
        "min_slots",
        "unit",
        "unit_rate",
      ]),
      initialSlots: decodeInteger(json["initial_slots"], path, "initial_slots"),
      maxSlots:
        json["max_slots"] != null
          ? decodeInteger(json["max_slots"], path, "max_slots")
          : json["max_slots"],
      minSlots:
        json["min_slots"] != null
          ? decodeInteger(json["min_slots"], path, "min_slots")
          : json["min_slots"],
      unit: decodeString(json["unit"], path, "unit"),
      unitRate: decodeString(json["unit_rate"], path, "unit_rate"),
    };
  },

  serialize(value: SlotFee): any {
    return {
      ...extraProperties(value, [
        "initialSlots",
        "maxSlots",
        "minSlots",
        "unit",
        "unitRate",
      ]),
      initial_slots: value.initialSlots,
      max_slots: value.maxSlots,
      min_slots: value.minSlots,
      unit: value.unit,
      unit_rate: value.unitRate,
    };
  },
};
