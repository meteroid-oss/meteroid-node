// this file is @generated
import { decodeString } from "../decode.js";

export const ScheduledEventType = {
  PlanChange: "PLAN_CHANGE",
  Cancel: "CANCEL",
  Amendment: "AMENDMENT",
} as const;
export type ScheduledEventType =
  | (typeof ScheduledEventType)[keyof typeof ScheduledEventType]
  | (string & {});

/** Converts `ScheduledEventType` values from (`parse`) and to (`serialize`) their JSON form. */
export const ScheduledEventTypeSerializer = {
  parse(json: any, path = "$"): ScheduledEventType {
    return decodeString(json, path);
  },

  serialize(value: ScheduledEventType): any {
    return value;
  },
};
