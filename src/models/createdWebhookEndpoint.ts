// this file is @generated
import { extraProperties, pickProperties } from "../json.js";
import { decodeObject, decodeString } from "../decode.js";
import { type WebhookEndpoint, WebhookEndpointSerializer } from "./webhookEndpoint.js";
/**
 * The signing secret is returned in full here and never again outside the reveal
 * and rotate endpoints.
 */
export interface CreatedWebhookEndpoint extends WebhookEndpoint {
  secret: string;
}

/** Converts `CreatedWebhookEndpoint` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreatedWebhookEndpointSerializer = {
  parse(json: any, path = "$"): CreatedWebhookEndpoint {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "secret",
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
      ...pickProperties(WebhookEndpointSerializer.parse(json, path), [
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
      secret: decodeString(json["secret"], path, "secret"),
    };
  },

  serialize(value: CreatedWebhookEndpoint): any {
    return {
      ...extraProperties(value, [
        "secret",
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
      ...pickProperties(WebhookEndpointSerializer.serialize(value), [
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
      secret: value.secret,
    };
  },
};
