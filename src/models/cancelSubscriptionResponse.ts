// this file is @generated
import { extraProperties } from "../json.js";
import { decodeList, decodeObject, decodePath, decodeString } from "../decode.js";
import {
  type PendingScheduledEvent,
  PendingScheduledEventSerializer,
} from "./pendingScheduledEvent.js";
import { type Subscription, SubscriptionSerializer } from "./subscription.js";

export interface CancelSubscriptionResponse {
  /** Changes still scheduled after this request, including the cancellation. */
  pendingEvents: PendingScheduledEvent[];
  /**
   * Date the subscription ends at the start of: its first day without service. Empty when the
   * cancellation applied immediately.
   */
  scheduledCancellationDate?: string | null | undefined;
  subscription: Subscription;
}

/** Converts `CancelSubscriptionResponse` values from (`parse`) and to (`serialize`) their JSON form. */
export const CancelSubscriptionResponseSerializer = {
  parse(json: any, path = "$"): CancelSubscriptionResponse {
    decodeObject(json, path);
    return {
      ...extraProperties(json, [
        "pending_events",
        "scheduled_cancellation_date",
        "subscription",
      ]),
      pendingEvents: decodeList(
        json["pending_events"],
        path,
        "pending_events",
        (item: any, p: string, i: number) =>
          PendingScheduledEventSerializer.parse(item, decodePath(p, i))
      ),
      scheduledCancellationDate:
        json["scheduled_cancellation_date"] != null
          ? decodeString(
              json["scheduled_cancellation_date"],
              path,
              "scheduled_cancellation_date"
            )
          : json["scheduled_cancellation_date"],
      subscription: SubscriptionSerializer.parse(
        json["subscription"],
        decodePath(path, "subscription")
      ),
    };
  },

  serialize(value: CancelSubscriptionResponse): any {
    return {
      ...extraProperties(value, [
        "pendingEvents",
        "scheduledCancellationDate",
        "subscription",
      ]),
      pending_events: value.pendingEvents.map((item: any) =>
        PendingScheduledEventSerializer.serialize(item)
      ),
      scheduled_cancellation_date: value.scheduledCancellationDate,
      subscription: SubscriptionSerializer.serialize(value.subscription),
    };
  },
};
