// this file is @generated
import { decodeObject } from "../decode.js";
import {
  type BillingCycleResetPeriod,
  BillingCycleResetPeriodSerializer,
} from "./billingCycleResetPeriod.js";
import {
  type CalendarResetPeriod,
  CalendarResetPeriodSerializer,
} from "./calendarResetPeriod.js";
import {
  type FixedWindowResetPeriod,
  FixedWindowResetPeriodSerializer,
} from "./fixedWindowResetPeriod.js";
import { type NeverResetPeriod, NeverResetPeriodSerializer } from "./neverResetPeriod.js";
import {
  type SlidingWindowResetPeriod,
  SlidingWindowResetPeriodSerializer,
} from "./slidingWindowResetPeriod.js";

export interface ResetPeriodBillingCycle extends BillingCycleResetPeriod {
  type: "BILLING_CYCLE";
}
export interface ResetPeriodCalendar extends CalendarResetPeriod {
  type: "CALENDAR";
}
export interface ResetPeriodFixedWindow extends FixedWindowResetPeriod {
  type: "FIXED_WINDOW";
}
export interface ResetPeriodSlidingWindow extends SlidingWindowResetPeriod {
  type: "SLIDING_WINDOW";
}
export interface ResetPeriodNever extends NeverResetPeriod {
  type: "NEVER";
}

export type ResetPeriod =
  | ResetPeriodBillingCycle
  | ResetPeriodCalendar
  | ResetPeriodFixedWindow
  | ResetPeriodSlidingWindow
  | ResetPeriodNever;

/** Converts `ResetPeriod` values from (`parse`) and to (`serialize`) their JSON form. */
export const ResetPeriodSerializer = {
  parse(json: any, path = "$"): ResetPeriod {
    decodeObject(json, path);
    switch (json["type"]) {
      case "BILLING_CYCLE":
        return {
          ...BillingCycleResetPeriodSerializer.parse(json, path),
          type: "BILLING_CYCLE",
        };
      case "CALENDAR":
        return {
          ...CalendarResetPeriodSerializer.parse(json, path),
          type: "CALENDAR",
        };
      case "FIXED_WINDOW":
        return {
          ...FixedWindowResetPeriodSerializer.parse(json, path),
          type: "FIXED_WINDOW",
        };
      case "SLIDING_WINDOW":
        return {
          ...SlidingWindowResetPeriodSerializer.parse(json, path),
          type: "SLIDING_WINDOW",
        };
      case "NEVER":
        return {
          ...NeverResetPeriodSerializer.parse(json, path),
          type: "NEVER",
        };
      default:
        // A variant added to the API after this SDK was generated, kept as received.
        return json;
    }
  },

  serialize(value: ResetPeriod): any {
    switch (value.type) {
      case "BILLING_CYCLE":
        return {
          ...BillingCycleResetPeriodSerializer.serialize(value),
          type: "BILLING_CYCLE",
        };
      case "CALENDAR":
        return {
          ...CalendarResetPeriodSerializer.serialize(value),
          type: "CALENDAR",
        };
      case "FIXED_WINDOW":
        return {
          ...FixedWindowResetPeriodSerializer.serialize(value),
          type: "FIXED_WINDOW",
        };
      case "SLIDING_WINDOW":
        return {
          ...SlidingWindowResetPeriodSerializer.serialize(value),
          type: "SLIDING_WINDOW",
        };
      case "NEVER":
        return {
          ...NeverResetPeriodSerializer.serialize(value),
          type: "NEVER",
        };
      default:
        return value;
    }
  },
};
