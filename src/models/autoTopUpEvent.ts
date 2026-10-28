// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import {
  type AutoTopUpEventData,
  AutoTopUpEventDataSerializer,
} from "./autoTopUpEventData.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";

export interface AutoTopUpEvent extends AutoTopUpEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `AutoTopUpEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpEventSerializer = {
  parse(json: any, path = "$"): AutoTopUpEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "amount",
        "consecutive_failures",
        "currency",
        "customer_id",
        "error",
        "suspended_at",
      ]),
      ...pickProperties(AutoTopUpEventDataSerializer.parse(json, path), [
        "amount",
        "consecutiveFailures",
        "currency",
        "customerId",
        "error",
        "suspendedAt",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: AutoTopUpEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "amount",
        "consecutiveFailures",
        "currency",
        "customerId",
        "error",
        "suspendedAt",
      ]),
      ...pickProperties(AutoTopUpEventDataSerializer.serialize(value), [
        "amount",
        "consecutive_failures",
        "currency",
        "customer_id",
        "error",
        "suspended_at",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
