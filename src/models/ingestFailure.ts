// this file is @generated
import { extraProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";

export interface IngestFailure {
  eventId: string;
  reason: string;
}

/** Converts `IngestFailure` values from (`parse`) and to (`serialize`) their JSON form. */
export const IngestFailureSerializer = {
  parse(json: any, path = "$"): IngestFailure {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["event_id", "reason"]),
      eventId: decodeString(json["event_id"], path, "event_id"),
      reason: decodeString(json["reason"], path, "reason"),
    };
  },

  serialize(value: IngestFailure): any {
    return {
      ...extraProperties(value, ["eventId", "reason"]),
      event_id: value.eventId,
      reason: value.reason,
    };
  },
};
