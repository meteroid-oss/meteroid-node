// this file is @generated
import { decodeString } from "../decode.js";

export type SubscriptionAddOnId = string;

/** Converts `SubscriptionAddOnId` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionAddOnIdSerializer = {
  parse(json: any, path = "$"): SubscriptionAddOnId {
    return decodeString(json, path);
  },

  serialize(value: SubscriptionAddOnId): any {
    return value;
  },
};
