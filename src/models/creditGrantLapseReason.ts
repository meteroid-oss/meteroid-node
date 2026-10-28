// this file is @generated
import { decodeString } from "../decode.js";
/** Why a credit grant's unspent credit lapsed. */
export const CreditGrantLapseReason = {
  Expired: "EXPIRED",
  SubscriptionEnded: "SUBSCRIPTION_ENDED",
} as const;
export type CreditGrantLapseReason =
  | (typeof CreditGrantLapseReason)[keyof typeof CreditGrantLapseReason]
  | (string & {});

/** Converts `CreditGrantLapseReason` values from (`parse`) and to (`serialize`) their JSON form. */
export const CreditGrantLapseReasonSerializer = {
  parse(json: any, path = "$"): CreditGrantLapseReason {
    return decodeString(json, path);
  },

  serialize(value: CreditGrantLapseReason): any {
    return value;
  },
};
