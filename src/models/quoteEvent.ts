// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import { type QuoteEventData, QuoteEventDataSerializer } from "./quoteEventData.js";

export interface QuoteEvent extends QuoteEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `QuoteEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const QuoteEventSerializer = {
  parse(json: any, path = "$"): QuoteEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "customer_id",
        "quote_id",
        "subscription_id",
      ]),
      ...pickProperties(QuoteEventDataSerializer.parse(json, path), [
        "customerId",
        "quoteId",
        "subscriptionId",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: QuoteEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "customerId",
        "quoteId",
        "subscriptionId",
      ]),
      ...pickProperties(QuoteEventDataSerializer.serialize(value), [
        "customer_id",
        "quote_id",
        "subscription_id",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
