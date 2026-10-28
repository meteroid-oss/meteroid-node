// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import {
  type AutoTopUpCapReachedEventData,
  AutoTopUpCapReachedEventDataSerializer,
} from "./autoTopUpCapReachedEventData.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";

export interface AutoTopUpCapReachedEvent extends AutoTopUpCapReachedEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `AutoTopUpCapReachedEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const AutoTopUpCapReachedEventSerializer = {
  parse(json: any, path = "$"): AutoTopUpCapReachedEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "attempted_amount",
        "cap",
        "currency",
        "customer_id",
        "period",
        "period_end",
        "period_start",
      ]),
      ...pickProperties(AutoTopUpCapReachedEventDataSerializer.parse(json, path), [
        "attemptedAmount",
        "cap",
        "currency",
        "customerId",
        "period",
        "periodEnd",
        "periodStart",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: AutoTopUpCapReachedEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "attemptedAmount",
        "cap",
        "currency",
        "customerId",
        "period",
        "periodEnd",
        "periodStart",
      ]),
      ...pickProperties(AutoTopUpCapReachedEventDataSerializer.serialize(value), [
        "attempted_amount",
        "cap",
        "currency",
        "customer_id",
        "period",
        "period_end",
        "period_start",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
