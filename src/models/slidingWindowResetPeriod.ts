// this file is @generated
import { extraProperties } from "../json.js";
import { decodeInteger, decodeObject, decodePath, decodeString } from "../decode.js";
import { type CalendarUnit, CalendarUnitSerializer } from "./calendarUnit.js";
/**
 * Always ends at now — e.g. 30 days means the last 30 days, old usage drops off automatically.
 * A sliding window has no reset moment (`reset_at` is absent) and sends no threshold or
 * limit-reached webhooks; it is enforced by the entitlement check.
 */
export interface SlidingWindowResetPeriod {
  interval: number;
  type: "SLIDING_WINDOW";
  unit: CalendarUnit;
}

/** Converts `SlidingWindowResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const SlidingWindowResetPeriodSerializer = {
  parse(json: any, path = "$"): SlidingWindowResetPeriod {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["interval", "type", "unit"]),
      interval: decodeInteger(json["interval"], path, "interval"),
      type:
        json["type"] != null
          ? (decodeString(json["type"], path, "type") as "SLIDING_WINDOW")
          : "SLIDING_WINDOW",
      unit: CalendarUnitSerializer.parse(json["unit"], decodePath(path, "unit")),
    };
  },

  serialize(value: SlidingWindowResetPeriod): any {
    return {
      ...extraProperties(value, ["interval", "type", "unit"]),
      interval: value.interval,
      type: value.type ?? "SLIDING_WINDOW",
      unit: CalendarUnitSerializer.serialize(value.unit),
    };
  },
};
