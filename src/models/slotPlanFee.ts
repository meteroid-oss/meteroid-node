// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type TermRate, TermRateSerializer } from "./termRate.js";
/** Slot-based fee (e.g., per-seat pricing) */
export interface SlotPlanFee {
  minimumCount?: number | null | undefined;
  quota?: number | null | undefined;
  rates: TermRate[];
  slotUnitName: string;
}

/** Converts `SlotPlanFee` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlotPlanFeeSerializer = {
  parse(json: any, path = "$"): SlotPlanFee {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["minimum_count", "quota", "rates", "slot_unit_name"]),
      minimumCount:
        json["minimum_count"] != null
          ? decodeInteger(json["minimum_count"], path, "minimum_count")
          : json["minimum_count"],
      quota:
        json["quota"] != null
          ? decodeInteger(json["quota"], path, "quota")
          : json["quota"],
      rates: decodeList(json["rates"], path, "rates", (item: any, p: string, i: number) =>
        TermRateSerializer.parse(item, decodePath(p, i))
      ),
      slotUnitName: decodeString(json["slot_unit_name"], path, "slot_unit_name"),
    };
  },

  serialize(value: SlotPlanFee): any {
    return {
      ...extraProperties(value, ["minimumCount", "quota", "rates", "slotUnitName"]),
      minimum_count: value.minimumCount,
      quota: value.quota,
      rates: value.rates.map((item: any) => TermRateSerializer.serialize(item)),
      slot_unit_name: value.slotUnitName,
    };
  },
};
