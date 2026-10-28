// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CalendarUnit, CalendarUnitSerializer } from "./calendarUnit.js";
/** Resets at regular intervals — anchored to your subscription's exact activation time. */
export interface FixedWindowResetPeriod {
  interval: number;
  type: "FIXED_WINDOW";
  unit: CalendarUnit;
}

/** Converts `FixedWindowResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const FixedWindowResetPeriodSerializer = {
  parse(json: any, path = "$"): FixedWindowResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["interval", "type", "unit"]),
      interval: decodeInteger(json["interval"], path, "interval"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "FIXED_WINDOW")
          : "FIXED_WINDOW",
      unit: CalendarUnitSerializer.parse(json["unit"], decodePath(path, "unit")),
    };
  },

  serialize(value: FixedWindowResetPeriod): any {
    return {
      ...extraProperties(value, ["interval", "type", "unit"]),
      interval: value.interval,
      type: value.type ?? "FIXED_WINDOW",
      unit: CalendarUnitSerializer.serialize(value.unit),
    };
  },
};
