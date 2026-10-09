// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import { type EventId, EventIdSerializer } from "./eventId.js";
import {
  type WebhookDeliveryId,
  WebhookDeliveryIdSerializer,
} from "./webhookDeliveryId.js";
import {
  type WebhookDeliveryStatus,
  WebhookDeliveryStatusSerializer,
} from "./webhookDeliveryStatus.js";
import {
  type WebhookEndpointId,
  WebhookEndpointIdSerializer,
} from "./webhookEndpointId.js";
/** One event queued for one endpoint, with the state of its retry cycle. */
export interface WebhookDelivery {
  attemptCount: number;
  completedAt?: Date | null | undefined;
  createdAt: Date;
  endpointId: WebhookEndpointId;
  eventType: string;
  id: WebhookDeliveryId;
  lastError?: string | null | undefined;
  lastResponseStatus?: number | null | undefined;
  /** True when the delivery was created by a resend or a test event. */
  manual: boolean;
  messageId: EventId;
  nextAttemptAt?: Date | null | undefined;
  status: WebhookDeliveryStatus;
}

/** Converts `WebhookDelivery` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookDeliverySerializer = {
  parse(json: any, path = "$"): WebhookDelivery {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "attempt_count",
        "completed_at",
        "created_at",
        "endpoint_id",
        "event_type",
        "id",
        "last_error",
        "last_response_status",
        "manual",
        "message_id",
        "next_attempt_at",
        "status",
      ]),
      attemptCount: decodeInteger(json["attempt_count"], path, "attempt_count"),
      completedAt:
        json["completed_at"] != null
          ? decodeDateTime(json["completed_at"], path, "completed_at")
          : json["completed_at"],
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      endpointId: WebhookEndpointIdSerializer.parse(
        json["endpoint_id"],
        decodePath(path, "endpoint_id")
      ),
      eventType: decodeString(json["event_type"], path, "event_type"),
      id: WebhookDeliveryIdSerializer.parse(json["id"], decodePath(path, "id")),
      lastError:
        json["last_error"] != null
          ? decodeString(json["last_error"], path, "last_error")
          : json["last_error"],
      lastResponseStatus:
        json["last_response_status"] != null
          ? decodeInteger(json["last_response_status"], path, "last_response_status")
          : json["last_response_status"],
      manual: decodeBoolean(json["manual"], path, "manual"),
      messageId: EventIdSerializer.parse(
        json["message_id"],
        decodePath(path, "message_id")
      ),
      nextAttemptAt:
        json["next_attempt_at"] != null
          ? decodeDateTime(json["next_attempt_at"], path, "next_attempt_at")
          : json["next_attempt_at"],
      status: WebhookDeliveryStatusSerializer.parse(
        json["status"],
        decodePath(path, "status")
      ),
    };
  },

  serialize(value: WebhookDelivery): any {
    return {
      ...extraProperties(value, [
        "attemptCount",
        "completedAt",
        "createdAt",
        "endpointId",
        "eventType",
        "id",
        "lastError",
        "lastResponseStatus",
        "manual",
        "messageId",
        "nextAttemptAt",
        "status",
      ]),
      attempt_count: value.attemptCount,
      completed_at: value.completedAt,
      created_at: value.createdAt,
      endpoint_id: WebhookEndpointIdSerializer.serialize(value.endpointId),
      event_type: value.eventType,
      id: WebhookDeliveryIdSerializer.serialize(value.id),
      last_error: value.lastError,
      last_response_status: value.lastResponseStatus,
      manual: value.manual,
      message_id: EventIdSerializer.serialize(value.messageId),
      next_attempt_at: value.nextAttemptAt,
      status: WebhookDeliveryStatusSerializer.serialize(value.status),
    };
  },
};
