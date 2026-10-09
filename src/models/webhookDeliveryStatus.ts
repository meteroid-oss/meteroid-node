// this file is @generated
import { decodeString } from "../decode.js";

export const WebhookDeliveryStatus = {
  Pending: "PENDING",
  InFlight: "IN_FLIGHT",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
} as const;
export type WebhookDeliveryStatus =
  | (typeof WebhookDeliveryStatus)[keyof typeof WebhookDeliveryStatus]
  | (string & {});

/** Converts `WebhookDeliveryStatus` values from (`parse`) and to (`serialize`) their JSON form. */
export const WebhookDeliveryStatusSerializer = {
  parse(json: any, path = "$"): WebhookDeliveryStatus {
    return decodeString(json, path);
  },

  serialize(value: WebhookDeliveryStatus): any {
    return value;
  },
};
