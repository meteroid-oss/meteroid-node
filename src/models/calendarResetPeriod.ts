// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CalendarUnit, CalendarUnitSerializer } from "./calendarUnit.js";
/** Resets on calendar boundaries (e.g. the 1st of every month) — not tied to subscription start date. */
export interface CalendarResetPeriod {
  interval: number;
  type: "CALENDAR";
  unit: CalendarUnit;
}

/** Converts `CalendarResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const CalendarResetPeriodSerializer = {
  parse(json: any, path = "$"): CalendarResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["interval", "type", "unit"]),
      interval: decodeInteger(json["interval"], path, "interval"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "CALENDAR")
          : "CALENDAR",
      unit: CalendarUnitSerializer.parse(json["unit"], decodePath(path, "unit")),
    };
  },

  serialize(value: CalendarResetPeriod): any {
    return {
      ...extraProperties(value, ["interval", "type", "unit"]),
      interval: value.interval,
      type: value.type ?? "CALENDAR",
      unit: CalendarUnitSerializer.serialize(value.unit),
    };
  },
};
