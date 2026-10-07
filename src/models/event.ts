// this file is @generated
import { extraProperties } from "../json.js";
import { decodeMap, decodeObject, decodeString } from "../decode.js";

export interface Event {
  /** Billable metric code. Max 512 characters. */
  code: string;
  /** Meteroid customer ID or external customer alias. */
  customerId: string;
  /** Unique event identifier. Max 255 characters. A UUID or ULID is recommended. */
  eventId: string;
  /** Arbitrary string key-value pairs used by billable metrics for filtering and aggregation. */
  properties?: { [key: string]: string } | undefined;
  /**
   * RFC 3339 timestamp. Defaults to ingestion time if omitted.
   * Must be between 24 hours ago and 1 hour from now. Set `allow_backfilling` to remove the past limit.
   */
  timestamp: string;
}

/** Converts `Event` values from (`parse`) and to (`serialize`) their JSON form. */
export const EventSerializer = {
  parse(json: any, path = "$"): Event {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "code",
        "customer_id",
        "event_id",
        "properties",
        "timestamp",
      ]),
      code: decodeString(json["code"], path, "code"),
      customerId: decodeString(json["customer_id"], path, "customer_id"),
      eventId: decodeString(json["event_id"], path, "event_id"),
      properties:
        json["properties"] != null
          ? decodeMap(
              json["properties"],
              path,
              "properties",
              (entry: any, p: string, key: string) => decodeString(entry, p, key)
            )
          : undefined,
      timestamp: decodeString(json["timestamp"], path, "timestamp"),
    };
  },

  serialize(value: Event): any {
    return {
      ...extraProperties(value, [
        "code",
        "customerId",
        "eventId",
        "properties",
        "timestamp",
      ]),
      code: value.code,
      customer_id: value.customerId,
      event_id: value.eventId,
      properties: value.properties,
      timestamp: value.timestamp,
    };
  },
};
