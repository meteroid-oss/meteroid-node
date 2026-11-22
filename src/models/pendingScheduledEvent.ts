// this file is @generated
import { extraProperties } from "../json.js";
import { decodeBoolean, decodeObject, decodePath, decodeString } from "../decode.js";
import { type PlanVersionId, PlanVersionIdSerializer } from "./planVersionId.js";
import { type ScheduledEventId, ScheduledEventIdSerializer } from "./scheduledEventId.js";
import {
  type ScheduledEventType,
  ScheduledEventTypeSerializer,
} from "./scheduledEventType.js";

export interface PendingScheduledEvent {
  cancelReason?: string | null | undefined;
  customerInitiated: boolean;
  eventType: ScheduledEventType;
  id: ScheduledEventId;
  newPlanName?: string | null | undefined;
  newPlanVersionId?: PlanVersionId | null | undefined;
  /** Date the event takes effect at the start of */
  scheduledDate: string;
}

/** Converts `PendingScheduledEvent` values from (`parse`) and to (`serialize`) their JSON form. */
export const PendingScheduledEventSerializer = {
  parse(json: any, path = "$"): PendingScheduledEvent {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "cancel_reason",
        "customer_initiated",
        "event_type",
        "id",
        "new_plan_name",
        "new_plan_version_id",
        "scheduled_date",
      ]),
      cancelReason:
        json["cancel_reason"] != null
          ? decodeString(json["cancel_reason"], path, "cancel_reason")
          : json["cancel_reason"],
      customerInitiated: decodeBoolean(
        json["customer_initiated"],
        path,
        "customer_initiated"
      ),
      eventType: ScheduledEventTypeSerializer.parse(
        json["event_type"],
        decodePath(path, "event_type")
      ),
      id: ScheduledEventIdSerializer.parse(json["id"], decodePath(path, "id")),
      newPlanName:
        json["new_plan_name"] != null
          ? decodeString(json["new_plan_name"], path, "new_plan_name")
          : json["new_plan_name"],
      newPlanVersionId:
        json["new_plan_version_id"] != null
          ? PlanVersionIdSerializer.parse(
              json["new_plan_version_id"],
              decodePath(path, "new_plan_version_id")
            )
          : json["new_plan_version_id"],
      scheduledDate: decodeString(json["scheduled_date"], path, "scheduled_date"),
    };
  },

  serialize(value: PendingScheduledEvent): any {
    return {
      ...extraProperties(value, [
        "cancelReason",
        "customerInitiated",
        "eventType",
        "id",
        "newPlanName",
        "newPlanVersionId",
        "scheduledDate",
      ]),
      cancel_reason: value.cancelReason,
      customer_initiated: value.customerInitiated,
      event_type: ScheduledEventTypeSerializer.serialize(value.eventType),
      id: ScheduledEventIdSerializer.serialize(value.id),
      new_plan_name: value.newPlanName,
      new_plan_version_id:
        value.newPlanVersionId != null
          ? PlanVersionIdSerializer.serialize(value.newPlanVersionId)
          : value.newPlanVersionId,
      scheduled_date: value.scheduledDate,
    };
  },
};
