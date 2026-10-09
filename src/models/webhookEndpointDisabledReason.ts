// this file is @generated
import { decodeString } from "../decode.js";

export const WebhookEndpointDisabledReason = {
  Manual: "MANUAL",
  AutoFailures: "AUTO_FAILURES",
  Gone: "GONE",
} as const;
export type WebhookEndpointDisabledReason =
  | (typeof WebhookEndpointDisabledReason)[keyof typeof WebhookEndpointDisabledReason]
  | (string & {});

/** Converts `WebhookEndpointDisabledReason` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookEndpointDisabledReasonSerializer = {
  parse(json: any, path = "$"): WebhookEndpointDisabledReason {
    return decodeString(json, path);
  },

  serialize(value: WebhookEndpointDisabledReason): any {
    return value;
  },
};
