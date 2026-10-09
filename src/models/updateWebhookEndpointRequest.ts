// this file is @generated
import { extraProperties } from "../json.js";
import {
  decodeBoolean,
  decodeInteger,
  decodeList,
  decodeObject,
  decodePath,
  decodeString,
} from "../decode.js";
import {
  type WebhookHeaderInput,
  WebhookHeaderInputSerializer,
} from "./webhookHeaderInput.js";

export interface UpdateWebhookEndpointRequest {
  /** Omit to leave unchanged; send `null` or an empty string to clear. */
  description?: string | null | undefined;
  /** Re-enabling an endpoint also resets its consecutive failure count. */
  disabled?: boolean | null | undefined;
  /** Replaces the subscription list. An empty array subscribes to every event type. */
  eventTypes?: string[] | null | undefined;
  /** Replaces the custom header list. An empty array removes every header. */
  headers?: WebhookHeaderInput[] | null | undefined;
  /** Omit to leave unchanged; send `null` to remove the rate limit. */
  rateLimitPerSec?: number | null | undefined;
  url?: string | null | undefined;
}

/** Converts `UpdateWebhookEndpointRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const UpdateWebhookEndpointRequestSerializer = {
  parse(json: any, path = "$"): UpdateWebhookEndpointRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "description",
        "disabled",
        "event_types",
        "headers",
        "rate_limit_per_sec",
        "url",
      ]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      disabled:
        json["disabled"] != null
          ? decodeBoolean(json["disabled"], path, "disabled")
          : json["disabled"],
      eventTypes:
        json["event_types"] != null
          ? decodeList(
              json["event_types"],
              path,
              "event_types",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : json["event_types"],
      headers:
        json["headers"] != null
          ? decodeList(
              json["headers"],
              path,
              "headers",
              (item: any, p: string, i: number) =>
                WebhookHeaderInputSerializer.parse(item, decodePath(p, i))
            )
          : json["headers"],
      rateLimitPerSec:
        json["rate_limit_per_sec"] != null
          ? decodeInteger(json["rate_limit_per_sec"], path, "rate_limit_per_sec")
          : json["rate_limit_per_sec"],
      url: json["url"] != null ? decodeString(json["url"], path, "url") : json["url"],
    };
  },

  serialize(value: UpdateWebhookEndpointRequest): any {
    return {
      ...extraProperties(value, [
        "description",
        "disabled",
        "eventTypes",
        "headers",
        "rateLimitPerSec",
        "url",
      ]),
      description: value.description,
      disabled: value.disabled,
      event_types: value.eventTypes,
      headers:
        value.headers != null
          ? value.headers.map((item: any) => WebhookHeaderInputSerializer.serialize(item))
          : value.headers,
      rate_limit_per_sec: value.rateLimitPerSec,
      url: value.url,
    };
  },
};
