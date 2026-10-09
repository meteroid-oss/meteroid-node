// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeDateTime,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type WebhookEndpointDisabledReason,
  WebhookEndpointDisabledReasonSerializer,
} from "./webhookEndpointDisabledReason.js";
import {
  type WebhookEndpointId,
  WebhookEndpointIdSerializer,
} from "./webhookEndpointId.js";
import { type WebhookHeader, WebhookHeaderSerializer } from "./webhookHeader.js";
/** A destination Meteroid POSTs signed event payloads to. */
export interface WebhookEndpoint {
  /** Failures since the last success, reset to 0 on any 2xx. */
  consecutiveFailures: number;
  createdAt: Date;
  description?: string | null | undefined;
  disabled: boolean;
  disabledReason?: WebhookEndpointDisabledReason | null | undefined;
  /** Subscribed event types. Empty means every event type. */
  eventTypes: string[];
  /** Custom headers sent with every delivery. */
  headers: WebhookHeader[];
  id: WebhookEndpointId;
  lastFailureAt?: Date | null | undefined;
  lastSuccessAt?: Date | null | undefined;
  /**
   * How many deliveries this endpoint may have in flight at once. Read-only; it is
   * set from the tenant's environment when the endpoint is created.
   */
  maxInFlight: number;
  /**
   * A sensitive header still waits for its value; the endpoint cannot be enabled
   * until it is set.
   */
  needsSetup: boolean;
  /**
   * The endpoint was unreachable several times in a row: nothing is sent before
   * this time, then it is retried one delivery at a time until it answers again.
   */
  pausedUntil?: Date | null | undefined;
  /** Deliveries started per second, at most. */
  rateLimitPerSec?: number | null | undefined;
  updatedAt?: Date | null | undefined;
  url: string;
}

/** Converts `WebhookEndpoint` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookEndpointSerializer = {
  parse(json: any, path = "$"): WebhookEndpoint {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "consecutive_failures",
        "created_at",
        "description",
        "disabled",
        "disabled_reason",
        "event_types",
        "headers",
        "id",
        "last_failure_at",
        "last_success_at",
        "max_in_flight",
        "needs_setup",
        "paused_until",
        "rate_limit_per_sec",
        "updated_at",
        "url",
      ]),
      consecutiveFailures: decodeInteger(
        json["consecutive_failures"],
        path,
        "consecutive_failures"
      ),
      createdAt: decodeDateTime(json["created_at"], path, "created_at"),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      disabled: decodeBoolean(json["disabled"], path, "disabled"),
      disabledReason:
        json["disabled_reason"] != null
          ? WebhookEndpointDisabledReasonSerializer.parse(
              json["disabled_reason"],
              decodePath(path, "disabled_reason")
            )
          : json["disabled_reason"],
      eventTypes: decodeList(
        json["event_types"],
        path,
        "event_types",
        (item: any, p: string, i: number) => decodeString(item, p, i)
      ),
      headers: decodeList(
        json["headers"],
        path,
        "headers",
        (item: any, p: string, i: number) =>
          WebhookHeaderSerializer.parse(item, decodePath(p, i))
      ),
      id: WebhookEndpointIdSerializer.parse(json["id"], decodePath(path, "id")),
      lastFailureAt:
        json["last_failure_at"] != null
          ? decodeDateTime(json["last_failure_at"], path, "last_failure_at")
          : json["last_failure_at"],
      lastSuccessAt:
        json["last_success_at"] != null
          ? decodeDateTime(json["last_success_at"], path, "last_success_at")
          : json["last_success_at"],
      maxInFlight: decodeInteger(json["max_in_flight"], path, "max_in_flight"),
      needsSetup: decodeBoolean(json["needs_setup"], path, "needs_setup"),
      pausedUntil:
        json["paused_until"] != null
          ? decodeDateTime(json["paused_until"], path, "paused_until")
          : json["paused_until"],
      rateLimitPerSec:
        json["rate_limit_per_sec"] != null
          ? decodeInteger(json["rate_limit_per_sec"], path, "rate_limit_per_sec")
          : json["rate_limit_per_sec"],
      updatedAt:
        json["updated_at"] != null
          ? decodeDateTime(json["updated_at"], path, "updated_at")
          : json["updated_at"],
      url: decodeString(json["url"], path, "url"),
    };
  },

  serialize(value: WebhookEndpoint): any {
    return {
      ...extraProperties(value, [
        "consecutiveFailures",
        "createdAt",
        "description",
        "disabled",
        "disabledReason",
        "eventTypes",
        "headers",
        "id",
        "lastFailureAt",
        "lastSuccessAt",
        "maxInFlight",
        "needsSetup",
        "pausedUntil",
        "rateLimitPerSec",
        "updatedAt",
        "url",
      ]),
      consecutive_failures: value.consecutiveFailures,
      created_at: value.createdAt,
      description: value.description,
      disabled: value.disabled,
      disabled_reason:
        value.disabledReason != null
          ? WebhookEndpointDisabledReasonSerializer.serialize(value.disabledReason)
          : value.disabledReason,
      event_types: value.eventTypes,
      headers: value.headers.map((item: any) => WebhookHeaderSerializer.serialize(item)),
      id: WebhookEndpointIdSerializer.serialize(value.id),
      last_failure_at: value.lastFailureAt,
      last_success_at: value.lastSuccessAt,
      max_in_flight: value.maxInFlight,
      needs_setup: value.needsSetup,
      paused_until: value.pausedUntil,
      rate_limit_per_sec: value.rateLimitPerSec,
      updated_at: value.updatedAt,
      url: value.url,
    };
  },
};
