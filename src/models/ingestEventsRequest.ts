// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeList, decodeObject, decodePath } from "../decode.js";
import { type Event, EventSerializer } from "./event.js";

export interface IngestEventsRequest {
  /** Allow events with timestamps more than 1 day in the past. Defaults to `false`. */
  allowBackfilling?: boolean | null | undefined;
  /**
   * Accept the batch even if some events fail validation. Defaults to `false`.
   * When `true`, valid events are ingested and failures are reported in the response body.
   * When `false` (default), any invalid event rejects the entire batch.
   */
  allowPartialFailures?: boolean | null | undefined;
  /** 1–100 events per request. */
  events: Event[];
}

/** Converts `IngestEventsRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const IngestEventsRequestSerializer = {
  parse(json: any, path = "$"): IngestEventsRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, ["allow_backfilling", "allow_partial_failures", "events"]),
      allowBackfilling:
        json["allow_backfilling"] != null
          ? decodeBoolean(json["allow_backfilling"], path, "allow_backfilling")
          : json["allow_backfilling"],
      allowPartialFailures:
        json["allow_partial_failures"] != null
          ? decodeBoolean(json["allow_partial_failures"], path, "allow_partial_failures")
          : json["allow_partial_failures"],
      events: decodeList(
        json["events"],
        path,
        "events",
        (item: any, p: string, i: number) => EventSerializer.parse(item, decodePath(p, i))
      ),
    };
  },

  serialize(value: IngestEventsRequest): any {
    return {
      ...extraProperties(value, ["allowBackfilling", "allowPartialFailures", "events"]),
      allow_backfilling: value.allowBackfilling,
      allow_partial_failures: value.allowPartialFailures,
      events: value.events.map((item: any) => EventSerializer.serialize(item)),
    };
  },
};
