// this file is @generated
import { extraProperties } from "../json.js";
import {
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

export interface CreateWebhookEndpointRequest {
  description?: string | null | undefined;
  /** Event types to subscribe to. Omit or leave empty to receive every event type. */
  eventTypes?: string[] | undefined;
  /** Custom headers sent with every delivery. */
  headers?: WebhookHeaderInput[] | undefined;
  /** Deliveries started per second, at most (1 to 1000). */
  rateLimitPerSec?: number | null | undefined;
  /**
   * HTTPS destination. Private and loopback addresses are rejected unless the
   * instance is configured to allow them.
   */
  url: string;
}

/** Converts `CreateWebhookEndpointRequest` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreateWebhookEndpointRequestSerializer = {
  parse(json: any, path = "$"): CreateWebhookEndpointRequest {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "description",
        "event_types",
        "headers",
        "rate_limit_per_sec",
        "url",
      ]),
      description:
        json["description"] != null
          ? decodeString(json["description"], path, "description")
          : json["description"],
      eventTypes:
        json["event_types"] != null
          ? decodeList(
              json["event_types"],
              path,
              "event_types",
              (item: any, p: string, i: number) => decodeString(item, p, i)
            )
          : undefined,
      headers:
        json["headers"] != null
          ? decodeList(
              json["headers"],
              path,
              "headers",
              (item: any, p: string, i: number) =>
                WebhookHeaderInputSerializer.parse(item, decodePath(p, i))
            )
          : undefined,
      rateLimitPerSec:
        json["rate_limit_per_sec"] != null
          ? decodeInteger(json["rate_limit_per_sec"], path, "rate_limit_per_sec")
          : json["rate_limit_per_sec"],
      url: decodeString(json["url"], path, "url"),
    };
  },

  serialize(value: CreateWebhookEndpointRequest): any {
    return {
      ...extraProperties(value, [
        "description",
        "eventTypes",
        "headers",
        "rateLimitPerSec",
        "url",
      ]),
      description: value.description,
      event_types: value.eventTypes,
      headers:
        value.headers != null
          ? value.headers.map((item: any) => WebhookHeaderInputSerializer.serialize(item))
          : undefined,
      rate_limit_per_sec: value.rateLimitPerSec,
      url: value.url,
    };
  },
};
