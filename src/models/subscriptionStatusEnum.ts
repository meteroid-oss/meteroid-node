// this file is @generated
import { decodeString } from "../decode.js";
/**
 * `PendingCharge`, `Paused`, `Suspended`, `Superseded` and `Errored` stay in the published
 * schema; no subscription holds them any more, and a filter on them lists none.
 */
export const SubscriptionStatusEnum = {
  PendingActivation: "PENDING_ACTIVATION",
  PendingCharge: "PENDING_CHARGE",
  TrialActive: "TRIAL_ACTIVE",
  Active: "ACTIVE",
  TrialExpired: "TRIAL_EXPIRED",
  Paused: "PAUSED",
  Suspended: "SUSPENDED",
  Cancelled: "CANCELLED",
  Aborted: "ABORTED",
  Completed: "COMPLETED",
  Superseded: "SUPERSEDED",
  Errored: "ERRORED",
} as const;
export type SubscriptionStatusEnum =
  | (typeof SubscriptionStatusEnum)[keyof typeof SubscriptionStatusEnum]
  | (string & {});

/** Converts `SubscriptionStatusEnum` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionStatusEnumSerializer = {
  parse(json: any, path = "$"): SubscriptionStatusEnum {
    return decodeString(json, path);
  },

  serialize(value: SubscriptionStatusEnum): any {
    return value;
  },
};
