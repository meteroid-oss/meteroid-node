// this file is @generated
import { decodeString } from "../decode.js";

export type WebhookEndpointId = string;

/** Converts `WebhookEndpointId` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookEndpointIdSerializer = {
  parse(json: any, path = "$"): WebhookEndpointId {
    return decodeString(json, path);
  },

  serialize(value: WebhookEndpointId): any {
    return value;
  },
};
