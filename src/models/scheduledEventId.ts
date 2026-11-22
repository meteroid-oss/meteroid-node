// this file is @generated
import { decodeString } from "../decode.js";

export type ScheduledEventId = string;

/** Converts `ScheduledEventId` values from (`parse`) and to (`serialize`) their JSON form. */
export const ScheduledEventIdSerializer = {
  parse(json: any, path = "$"): ScheduledEventId {
    return decodeString(json, path);
  },

  serialize(value: ScheduledEventId): any {
    return value;
  },
};
