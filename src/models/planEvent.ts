// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeDateTime, decodeObject, decodePath } from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import { type EventType, EventTypeSerializer } from "./eventType.js";
import { type PlanEventData, PlanEventDataSerializer } from "./planEventData.js";

export interface PlanEvent extends PlanEventData {
  id: EventId;
  timestamp: Date;
  type: EventType;
}

/** Converts `PlanEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const PlanEventSerializer = {
  parse(json: any, path = "$"): PlanEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "id",
        "timestamp",
        "type",
        "created_at",
        "currency",
        "description",
        "name",
        "plan_id",
        "plan_type",
        "status",
        "version",
      ]),
      ...pickProperties(PlanEventDataSerializer.parse(json, path), [
        "createdAt",
        "currency",
        "description",
        "name",
        "planId",
        "planType",
        "status",
        "version",
      ]),
      id: EventIdSerializer.parse(json["id"], decodePath(path, "id")),
      timestamp: decodeDateTime(json["timestamp"], path, "timestamp"),
      type: EventTypeSerializer.parse(json["type"], decodePath(path, "type")),
    };
  },

  serialize(value: PlanEvent): any {
    return {
      ...extraProperties(value, [
        "id",
        "timestamp",
        "type",
        "createdAt",
        "currency",
        "description",
        "name",
        "planId",
        "planType",
        "status",
        "version",
      ]),
      ...pickProperties(PlanEventDataSerializer.serialize(value), [
        "created_at",
        "currency",
        "description",
        "name",
        "plan_id",
        "plan_type",
        "status",
        "version",
      ]),
      id: EventIdSerializer.serialize(value.id),
      timestamp: value.timestamp,
      type: EventTypeSerializer.serialize(value.type),
    };
  },
};
