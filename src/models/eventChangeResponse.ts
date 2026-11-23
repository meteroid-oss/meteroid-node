// this file is @generated
import { extraProperties } from "../json.js";
import { decodeDateTime, decodeObject } from "../decode.js";

export interface EventChangeResponse {
  /**
   * RFC 3339 stamp of the queued change, with nanoseconds. Changes to the same event resolve by
   * this stamp: the latest wins.
   */
  ingestedAt: Date;
}

/** Converts `EventChangeResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const EventChangeResponseSerializer = {
  parse(json: any, path = "$"): EventChangeResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["ingested_at"]),
      ingestedAt: decodeDateTime(json["ingested_at"], path, "ingested_at"),
    };
  },

  serialize(value: EventChangeResponse): any {
    return {
      ...extraProperties(value, ["ingestedAt"]),
      ingested_at: value.ingestedAt,
    };
  },
};
