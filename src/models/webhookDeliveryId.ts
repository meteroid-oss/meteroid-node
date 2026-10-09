// this file is @generated
import { decodeString } from "../decode.js";

export type WebhookDeliveryId = string;

/** Converts `WebhookDeliveryId` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookDeliveryIdSerializer = {
  parse(json: any, path = "$"): WebhookDeliveryId {
    return decodeString(json, path);
  },

  serialize(value: WebhookDeliveryId): any {
    return value;
  },
};
