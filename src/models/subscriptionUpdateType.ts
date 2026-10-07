// this file is @generated
import { decodeString } from "../decode.js";
/** Identifies which mutation triggered a `subscription.updated` webhook. */
export const SubscriptionUpdateType = {
  Activated: "activated",
  TrialEnded: "trial_ended",
  BillingConfigurationUpdated: "billing_configuration_updated",
  PlanChanged: "plan_changed",
  Amended: "amended",
  UnitsChanged: "units_changed",
  Paused: "paused",
  CancellationScheduled: "cancellation_scheduled",
} as const;
export type SubscriptionUpdateType =
  | (typeof SubscriptionUpdateType)[keyof typeof SubscriptionUpdateType]
  | (string & {});

/** Converts `SubscriptionUpdateType` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionUpdateTypeSerializer = {
  parse(json: any, path = "$"): SubscriptionUpdateType {
    return decodeString(json, path);
  },

  serialize(value: SubscriptionUpdateType): any {
    return value;
  },
};
