// this file is @generated
import { decodeString } from "../decode.js";

export type SubscriptionId = string;

/** Converts `SubscriptionId` values from (`parse`) and to (`serialize`) their JSON form. */
export const SubscriptionIdSerializer = {
  parse(json: any, path = "$"): SubscriptionId {
    return decodeString(json, path);
  },

  serialize(value: SubscriptionId): any {
    return value;
  },
};
