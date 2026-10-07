// this file is @generated
import { decodeString } from "../decode.js";

export type EventId = string;

/** Converts `EventId` values from (`parse`) and to (`serialize`) their JSON form. */
export const EventIdSerializer = {
  parse(json: any, path = "$"): EventId {
    return decodeString(json, path);
  },

  serialize(value: EventId): any {
    return value;
  },
};
