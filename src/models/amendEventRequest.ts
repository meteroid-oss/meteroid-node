// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeMap,
  decodeObject,
  decodeString,
} from "../decode.js";

export interface AmendEventRequest {
  /** Allow a timestamp more than 1 day in the past. Defaults to `false`. */
  allowBackfilling?: boolean | null | undefined;
  /** External customer alias of the event. Set this or `customer_id`. */
  customerAlias?: string | null | undefined;
  /** Meteroid customer ID of the event. Set this or `customer_alias`. */
  customerId?: string | null | undefined;
  /** The corrected properties. They replace the stored ones. */
  properties: { [key: string]: string };
  /**
   * RFC 3339 timestamp of the corrected event.
   * Must be between 24 hours ago and 1 hour from now. Set `allow_backfilling` to remove the past limit.
   */
  timestamp: Date;
}

/** Converts `AmendEventRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const AmendEventRequestSerializer = {
  parse(json: any, path = "$"): AmendEventRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "allow_backfilling",
        "customer_alias",
        "customer_id",
        "properties",
        "timestamp",
      ]),
      allowBackfilling:
        json["allow_backfilling"] != null
          ? decodeBoolean(json["allow_backfilling"], path, "allow_backfilling")
          : json["allow_backfilling"],
      customerAlias:
        json["customer_alias"] != null
          ? decodeString(json["customer_alias"], path, "customer_alias")
          : json["customer_alias"],
      customerId:
        json["customer_id"] != null
          ? decodeString(json["customer_id"], path, "customer_id")
          : json["customer_id"],
      properties: decodeMap(
        json["properties"],
        path,
        "properties",
        (entry: any, p: string, key: string) => decodeString(entry, p, key)
      ),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
    };
  },

  serialize(value: AmendEventRequest): any {
    return {
      ...extraProperties(value, [
        "allowBackfilling",
        "customerAlias",
        "customerId",
        "properties",
        "timestamp",
      ]),
      allow_backfilling: value.allowBackfilling,
      customer_alias: value.customerAlias,
      customer_id: value.customerId,
      properties: value.properties,
      timestamp: value.timestamp,
    };
  },
};
